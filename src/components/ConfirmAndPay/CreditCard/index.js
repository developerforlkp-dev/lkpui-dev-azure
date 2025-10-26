import React, { useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./CreditCard.module.sass";
import TextInput from "../../TextInput";
import TextArea from "../../TextArea";
import Checkbox from "../../Checkbox";

const cards = [
  {
    image: "./images/content/visa.svg",
    alt: "Visa",
  },
  {
    image: "./images/content/master-card.svg",
    alt: "Master Card",
  },
];

const CreditCard = ({ className, buttonUrl }) => {
  const [save, setSave] = useState(true);

  return (
    <div className={cn(className, styles.confirm)}>
      <div className={styles.line}>
        <div className={styles.subtitle}>Credit Card</div>
        <div className={styles.cards}>
          {cards.map((x, index) => (
            <div className={styles.card} key={index}>
              <img src={x.image} alt={x.alt} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.fieldset}>
        <TextInput
          className={styles.field}
          label="card number"
          name="card"
          type="tel"
          placeholder="XXXX XXXX XXXX XXXX"
          required
        />
        <TextInput
          className={styles.field}
          label="card holder"
          name="holder"
          type="text"
          placeholder="TRAN MAU TRI TAM"
          required
        />
        <div className={styles.row}>
          <TextInput
            className={styles.field}
            label="EXPIRATION DATE"
            name="date"
            type="tel"
            placeholder="MM / YY"
            required
          />
          <TextInput
            className={styles.field}
            label="CVC"
            name="cvc"
            type="tel"
            placeholder="CVC"
            required
          />
        </div>
      </div>
      <Checkbox
        className={styles.checkbox}
        value={save}
        onChange={() => setSave(!save)}
        content="Save Card"
      />
      <div className={styles.message}>
        <div className={styles.category}>Message the host</div>
        <TextArea
          className={styles.field}
          name="message"
          placeholder="I will be late about 1 hour, please wait..."
          required="required"
        />
      </div>
      <Link className={cn("button", styles.button)} to={buttonUrl}>
        Confirm and pay
      </Link>
    </div>
  );
};

export default CreditCard;
