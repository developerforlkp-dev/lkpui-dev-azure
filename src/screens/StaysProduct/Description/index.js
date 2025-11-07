import React, { useState, useMemo } from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";
import cn from "classnames";
import styles from "./Description.module.sass";
import Icon from "../../../components/Icon";
import Details, { addOns } from "./Details";
import Receipt from "../../../components/Receipt";
import DateTimeModal from "../../../components/DateTimeModal";

const basePrice = 833;
const discount = 125;
const serviceFee = 103;

const Description = ({ classSection }) => {
  const history = useHistory();
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  // default values
  const defaultDate = new Date();
  const formattedDefaultDate = defaultDate.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
  const timeSlots = ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"];
  const [selectedDate, setSelectedDate] = useState(moment(defaultDate));
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(timeSlots[0]);

  const items = [
    {
      title: selectedDate ? selectedDate.format("MMM DD, YYYY") : formattedDefaultDate,
      category: "Select date",
      icon: "calendar",
    },
    {
      title: selectedTimeSlot,
      category: "Time slot",
      icon: "clock",
    },
    {
      title: "2 guests",
      category: "Guest",
      icon: "user",
    },
  ];

  const [showDateTimeModal, setShowDateTimeModal] = useState(false);

  const handleToggleAddOn = (addOnId) => {
    setSelectedAddOns((prev) =>
      prev.includes(addOnId)
        ? prev.filter((id) => id !== addOnId)
        : [...prev, addOnId]
    );
  };

  const { addOnsTotal, finalTotal, receipt } = useMemo(() => {
    const addOnsPrice = selectedAddOns.reduce((sum, id) => {
      const addOn = addOns.find((a) => a.id === id);
      return sum + (addOn?.priceValue || 0);
    }, 0);
    
    const total = basePrice - discount + serviceFee + addOnsPrice;
    
    const receiptData = [
      {
        title: "$119 x 7 nights",
        content: `$${basePrice}`,
      },
      {
        title: "10% campaign discount",
        content: `-$${discount}`,
      },
    ];

    if (addOnsPrice > 0) {
      receiptData.push({
        title: `Add-ons (${selectedAddOns.length})`,
        content: `+$${addOnsPrice}`,
      });
    }

    receiptData.push(
      {
        title: "Service fee",
        content: `$${serviceFee}`,
      },
      {
        title: "Total",
        content: `$${total}`,
      }
    );

    return {
      addOnsTotal: addOnsPrice,
      finalTotal: total,
      receipt: receiptData,
    };
  }, [selectedAddOns]);

  const handleReserveClick = (e) => {
    e.preventDefault();
    const selectedAddOnsData = selectedAddOns
      .map((id) => addOns.find((a) => a.id === id))
      .filter(Boolean);
    
    history.push({
      pathname: "/stays-checkout",
      state: { addOns: selectedAddOnsData },
    });
  };

  const handleOpenDateTime = (index) => {
    // Open modal for both date and time selections
    if (index === 0 || index === 1) {
      setShowDateTimeModal(true);
    }
  };

  const handleConfirmDateTime = (dateText, timeText) => {
    if (dateText) {
      setSelectedDate(moment(new Date(dateText)));
    }
    setSelectedTimeSlot(timeText);
  };

  return (
    <>
      <div className={cn(classSection, styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.wrapper}>
            <Details 
              className={styles.details}
              selectedAddOns={selectedAddOns}
              onToggleAddOn={handleToggleAddOn}
            />
            <Receipt
              className={styles.receipt}
              items={items}
              priceOld="$119"
              priceActual="$109"
              time="night"
              onItemClick={handleOpenDateTime}
            >
              <div className={styles.btns}>
                <button className={cn("button-stroke", styles.button)}>
                  <span>Save</span>
                  <Icon name="plus" size="16" />
                </button>
                <button
                  className={cn("button", styles.button)}
                  onClick={handleReserveClick}
                >
                  <span>Reserve</span>
                  <Icon name="bag" size="16" />
                </button>
              </div>
              <div className={styles.table}>
                {receipt.map((x, index) => (
                  <div className={styles.line} key={index}>
                    <div className={styles.cell}>{x.title}</div>
                    <div className={styles.cell}>{x.content}</div>
                  </div>
                ))}
              </div>
              <div className={styles.foot}>
                <button className={styles.report}>
                  <Icon name="flag" size="12" />
                  Report this property
                </button>
              </div>
            </Receipt>
          </div>
        </div>
      </div>
      <DateTimeModal
        visible={showDateTimeModal}
        onClose={() => setShowDateTimeModal(false)}
        onConfirm={handleConfirmDateTime}
        selectedDate={selectedDate ? selectedDate.toDate().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }) : formattedDefaultDate}
        selectedTime={selectedTimeSlot}
      />
    </>
  );
};

export default Description;
