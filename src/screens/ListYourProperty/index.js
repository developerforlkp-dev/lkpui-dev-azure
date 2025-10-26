import React, { useState } from "react";
import cn from "classnames";
import styles from "./ListYourProperty.module.sass";
import Control from "../../components/Control";
import Dropdown from "../../components/Dropdown";
import Icon from "../../components/Icon";
import TextInput from "../../components/TextInput";
import TextArea from "../../components/TextArea";
import Loader from "../../components/Loader";
import Preview from "./Preview";

const breadcrumbs = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "List your property",
  },
];

const bedRoomOptions = ["1", "2", "3", "4"];
const livingRoomOptions = ["1", "2", "3", "4"];
const kitchenOptions = ["1", "2", "3", "4"];
const unitsOptions = ["%", "$", "€"];
const currencyOptions = ["$ USD", "€ EUR"];
const timeOptions = ["per Night", "per Day", "per Week"];

const Upload = () => {
  const [bedRoom, setBedRoom] = useState(bedRoomOptions[0]);
  const [livingRoom, setLivingRoom] = useState(livingRoomOptions[0]);
  const [kitchen, setKitchen] = useState(kitchenOptions[0]);
  const [units, setUnits] = useState(unitsOptions[0]);
  const [currency, setCurrency] = useState(currencyOptions[0]);
  const [time, setTime] = useState(timeOptions[0]);

  const [visiblePreview, setVisiblePreview] = useState(false);

  return (
    <>
      <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <Control
            className={styles.control}
            urlHome="/"
            breadcrumbs={breadcrumbs}
          />
          <div className={styles.inner}>
            <div className={styles.wrapper}>
              <div className={styles.head}>
                <div className={cn("h2", styles.title)}>List your property</div>
                <button
                  className={cn("button-stroke button-small", styles.button)}
                >
                  Switch to experience
                </button>
              </div>
              <form className={styles.form} action="">
                <div className={styles.list}>
                  <div className={styles.item}>
                    <div className={styles.category}>Upload photos</div>
                    <div className={styles.note}>
                      Drag or choose your file to upload
                    </div>
                    <div className={styles.file}>
                      <input className={styles.load} type="file" />
                      <div className={styles.icon}>
                        <Icon name="upload-file" size="24" />
                      </div>
                      <div className={styles.format}>
                        PNG, GIF, WEBP, MP4. Max 500Mb.
                      </div>
                    </div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.category}>Property details</div>
                    <div className={styles.fieldset}>
                      <TextInput
                        className={styles.field}
                        label="Title"
                        name="title"
                        type="text"
                        placeholder='e. g. "Spectacular views of Queenstown"'
                        required
                      />
                      <div className={styles.row}>
                        <div className={cn(styles.col, styles.w70)}>
                          <div className={styles.label}>price</div>
                          <div className={styles.line}>
                            <div className={styles.cell}>
                              <TextInput
                                className={styles.field}
                                name="discount"
                                type="text"
                                placeholder='e. g. "180"'
                                required
                                empty
                              />
                            </div>
                            <div className={styles.cell}>
                              <Dropdown
                                className={styles.dropdown}
                                value={currency}
                                setValue={setCurrency}
                                options={currencyOptions}
                                empty
                              />
                            </div>
                            <div className={styles.cell}>
                              <Dropdown
                                className={styles.dropdown}
                                value={time}
                                setValue={setTime}
                                options={timeOptions}
                                empty
                              />
                            </div>
                          </div>
                        </div>
                        <div className={cn(styles.col, styles.w30)}>
                          <div className={styles.label}>Discount</div>
                          <div className={styles.line}>
                            <div className={styles.cell}>
                              <TextInput
                                className={styles.field}
                                name="discount"
                                type="text"
                                placeholder='e. g. "10"'
                                required
                                empty
                              />
                            </div>
                            <div className={styles.cell}>
                              <Dropdown
                                className={styles.dropdown}
                                value={units}
                                setValue={setUnits}
                                options={unitsOptions}
                                empty
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.box}>
                        <TextInput
                          className={styles.field}
                          label="location"
                          name="location"
                          type="text"
                          placeholder="e. g. “Queenstown, Otago, New Zealand”"
                          required
                        />
                        <button className={styles.map}>Google map</button>
                      </div>
                      <div className={styles.row}>
                        <div className={cn(styles.col, styles.w33)}>
                          <div className={styles.label}>bed room</div>
                          <Dropdown
                            className={styles.dropdown}
                            value={bedRoom}
                            setValue={setBedRoom}
                            options={bedRoomOptions}
                          />
                        </div>
                        <div className={cn(styles.col, styles.w33)}>
                          <div className={styles.label}>living room</div>
                          <Dropdown
                            className={styles.dropdown}
                            value={livingRoom}
                            setValue={setLivingRoom}
                            options={livingRoomOptions}
                          />
                        </div>
                        <div className={cn(styles.col, styles.w33)}>
                          <div className={styles.label}>kitchen</div>
                          <Dropdown
                            className={styles.dropdown}
                            value={kitchen}
                            setValue={setKitchen}
                            options={kitchenOptions}
                          />
                        </div>
                      </div>
                      <TextArea
                        className={styles.field}
                        label="description"
                        name="description"
                        placeholder='e. g. "Spectacular views of Queenstown"'
                        required
                      />
                    </div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.category}>Amenities</div>
                    <div className={styles.row}>
                      <div className={cn(styles.col, styles.w50)}>
                        <TextInput
                          className={styles.field}
                          name="service1"
                          type="text"
                          placeholder="e. g. Wifi 24/7"
                          required
                        />
                      </div>
                      <div className={cn(styles.col, styles.w50)}>
                        <TextInput
                          className={styles.field}
                          name="service2"
                          type="text"
                          placeholder="e. g. Wifi 24/7"
                          required
                        />
                      </div>
                    </div>
                    <div className={styles.row}>
                      <div className={cn(styles.col, styles.w50)}>
                        <TextInput
                          className={styles.field}
                          name="service3"
                          type="text"
                          placeholder="e. g. Wifi 24/7"
                          required
                        />
                      </div>
                      <div className={cn(styles.col, styles.w50)}>
                        <TextInput
                          className={styles.field}
                          name="service4"
                          type="text"
                          placeholder="e. g. Wifi 24/7"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.category}>Core features</div>
                    <div className={styles.row}>
                      <div className={cn(styles.col, styles.w50)}>
                        <TextInput
                          className={styles.field}
                          name="service5"
                          type="text"
                          placeholder="e. g. Wifi 24/7"
                          required
                        />
                      </div>
                      <div className={cn(styles.col, styles.w50)}>
                        <TextInput
                          className={styles.field}
                          name="service6"
                          type="text"
                          placeholder="e. g. Wifi 24/7"
                          required
                        />
                      </div>
                    </div>
                    <button className={cn("button-stroke", styles.button)}>
                      <Icon name="plus" size="16" />
                      <span>Add more feature</span>
                    </button>
                  </div>
                </div>
                <div className={styles.foot}>
                  <button
                    className={cn("button-stroke tablet-show", styles.button)}
                    onClick={() => setVisiblePreview(true)}
                    type="button"
                  >
                    Preview
                  </button>
                  <button className={cn("button", styles.button)}>
                    <span>Submit for review</span>
                    <Icon name="arrow-next" size="10" />
                  </button>
                  <div className={styles.saving}>
                    <span>Auto saving</span>
                    <Loader className={styles.loader} />
                  </div>
                </div>
              </form>
            </div>
            <Preview
              className={cn(styles.preview, {
                [styles.active]: visiblePreview,
              })}
              onClose={() => setVisiblePreview(false)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
