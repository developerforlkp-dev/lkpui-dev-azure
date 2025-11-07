import React, { useMemo, useRef, useState, useEffect } from "react";
import cn from "classnames";
import Modal from "../Modal";
import Dropdown from "../Dropdown";
import styles from "./DateTimeModal.module.sass";

const getMonthLabel = (d) =>
  d.toLocaleDateString("en-US", { month: "long", year: "numeric" });

const buildMonthOptions = (count = 24) => {
  const now = new Date();
  const months = [];
  for (let i = 0; i < count; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
    months.push(getMonthLabel(d));
  }
  return months;
};

const buildMonthDays = (monthLabel) => {
  const [name, year] = monthLabel.split(" ");
  const monthIdx = new Date(`${name} 1, ${year}`).getMonth();
  const y = parseInt(year, 10);
  const daysInMonth = new Date(y, monthIdx + 1, 0).getDate();
  const out = [];
  for (let d = 1; d <= daysInMonth; d++) {
    out.push(new Date(y, monthIdx, d));
  }
  return out;
};

const defaultTimes = [
  "08:00 AM",
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
];

const DateTimeModal = ({
  visible,
  onClose,
  onConfirm,
  selectedDate,
  selectedTime,
  datesCount = 30, // not used in month mode but kept for API compatibility
  times = defaultTimes,
  dateOnly = false, // If true, only show date picker and auto-close on selection
}) => {
  const monthOptions = useMemo(() => buildMonthOptions(24), []);
  const [month, setMonth] = useState(getMonthLabel(new Date()));
  const dates = useMemo(() => buildMonthDays(month), [month]);
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const [hovered, setHovered] = useState(false);

  const [date, setDate] = useState(() => {
    if (selectedDate) {
      try {
        const parsedDate = new Date(selectedDate);
        if (!isNaN(parsedDate.getTime())) {
          return parsedDate;
        }
      } catch {
        // Invalid date, fall through
      }
    }
    return new Date();
  });
  const [time, setTime] = useState(selectedTime || times[0]);

  // Update date when selectedDate prop changes or modal opens, or when dates array is ready
  useEffect(() => {
    if (visible) {
      if (selectedDate) {
        try {
          const parsedDate = new Date(selectedDate);
          if (!isNaN(parsedDate.getTime())) {
            setDate(parsedDate);
            return;
          }
        } catch {
          // Invalid date, fall through
        }
      }
      // If no valid selectedDate, use first available date or today
      if (dates.length > 0) {
        const today = new Date();
        const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const firstAvailable = dates.find(d => {
          const dDate = new Date(d.getFullYear(), d.getMonth(), d.getDate());
          return dDate.getTime() >= todayDate.getTime();
        });
        if (firstAvailable) {
          setDate(firstAvailable);
        } else if (dates.length > 0) {
          setDate(dates[dates.length - 1]);
        }
      }
    }
  }, [visible, selectedDate, dates]);

  const fmtDay = (d) => d.toLocaleDateString("en-US", { weekday: "short" });
  const fmtDate = (d) => d.toLocaleDateString("en-US", { month: "short", day: "2-digit" });

  const handleDateSelect = (selectedDate) => {
    setDate(selectedDate);
    if (dateOnly) {
      // Auto-close and confirm when date is selected in date-only mode
      // Preserve the existing time selection
      const formatted = selectedDate.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });
      onConfirm?.(formatted, selectedTime || time || times[0]);
      onClose?.();
    }
  };

  const handleConfirm = () => {
    const formatted = date.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });
    onConfirm?.(formatted, time);
    onClose?.();
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const update = () => {
      setShowLeft(el.scrollLeft > 0);
      setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    };
    update();
    el.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Ensure the current date is the first visible card and disallow scrolling before it
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const today = new Date();
    const isCurrentMonth = getMonthLabel(today) === month;
    const card = el.querySelector(`.${styles.dateCard}`);
    const step = card ? card.clientWidth + 12 : 160 + 12;
    let minLeft = 0;
    if (isCurrentMonth) {
      const indexToday = dates.findIndex((d) => d.getDate() === today.getDate());
      if (indexToday >= 0) {
        minLeft = indexToday * step;
      }
    }
    el.scrollTo({ left: minLeft, behavior: "smooth" });

    const clampScroll = () => {
      if (!isCurrentMonth) return;
      if (el.scrollLeft < minLeft) el.scrollLeft = minLeft;
    };
    el.addEventListener("scroll", clampScroll);
    return () => el.removeEventListener("scroll", clampScroll);
  }, [month, dates]);

  const scrollByCards = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector(`.${styles.dateCard}`);
    const step = card ? card.clientWidth + 12 : 160;
    el.scrollBy({ left: dir * step * 3, behavior: "smooth" });
  };

  return (
    <Modal visible={visible} onClose={onClose} outerClassName={styles.modalOuter}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>{dateOnly ? "Select date" : "Select date & time"}</div>
          <div className={styles.subtitle}>{dateOnly ? "Choose your date" : "Choose your check-in schedule"}</div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>Select date</div>
          <div className={styles.monthRow}>
            <Dropdown value={month} setValue={setMonth} options={monthOptions} />
          </div>
          <div
            className={styles.dateScroll}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div className={styles.dateRow} ref={scrollRef}>
              {dates.map((d, i) => {
                const today = new Date();
                const isPast = d.setHours(0,0,0,0) < new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
                return (
                <button
                  key={i}
                  className={cn(styles.dateCard, {
                    [styles.active]: d.toDateString() === date.toDateString(),
                    [styles.disabled]: isPast,
                  })}
                  onClick={() => !isPast && handleDateSelect(d)}
                  disabled={isPast}
                >
                <div className={styles.day}>{fmtDay(d)}</div>
                <div className={styles.date}>{fmtDate(d)}</div>
                <div className={styles.slots}>8 slots</div>
                </button>
              )})}
            </div>
            {showLeft && (
              <button
                className={cn(styles.arrowButton, styles.arrowLeft, { [styles.arrowVisible]: hovered })}
                onClick={() => scrollByCards(-1)}
                aria-label="Scroll left"
              >
                ‹
              </button>
            )}
            {showRight && (
              <button
                className={cn(styles.arrowButton, styles.arrowRight, { [styles.arrowVisible]: hovered })}
                onClick={() => scrollByCards(1)}
                aria-label="Scroll right"
              >
                ›
              </button>
            )}
          </div>
        </div>
        {!dateOnly && (
          <>
            <div className={styles.section}>
              <div className={styles.sectionTitle}>Available times</div>
              <div className={styles.timesGrid}>
                {times.map((t) => (
                  <button
                    key={t}
                    className={cn(styles.timeBtn, { [styles.active]: time === t })}
                    onClick={() => setTime(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div className={styles.footer}>
              <button className={cn("button-stroke", styles.btn)} onClick={onClose}>Cancel</button>
              <button className={cn("button", styles.btn)} onClick={handleConfirm}>Confirm</button>
            </div>
          </>
        )}
        {dateOnly && (
          <div className={styles.footer}>
            <button className={cn("button-stroke", styles.btn)} onClick={onClose}>Cancel</button>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default DateTimeModal;


