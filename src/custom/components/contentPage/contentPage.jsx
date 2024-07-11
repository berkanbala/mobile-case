"use client";
import { useEffect, useState } from "react";
import Select from "react-select";
import WhiteLogo from "@/common/assets/media/1.png";
import Image from "next/image";
import styles from "./contentPage.module.scss";
import React, { useId } from "react";
import { getInitialValuesForm } from "./helpers";
import { OPTIONS_CATEGORY } from "@/common/shared";
import { Button } from "@/common/components/ui/button/button";
import { getDataFromTestApi } from "@/common/services/testService";

export default function ContentPage() {
  const [formData, setFormData] = useState(getInitialValuesForm());
  const [conclusions, setConclusions] = useState([]);
  const [form, setForm] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [options, setOptions] = useState([]);

  const onSubmitForm = (e) => {
    e.preventdefault();
    setForm(form);
    setCustomerName("");
  };

  const handleClear = () => {
    setFormData(getInitialValuesForm());
  };

  const handleSave = () => {
    setForm();
    console.log(formData);
  };

  const getAllDataFirst = async () => {
    try {
      const response = await getDataFromTestApi();
      setOptions(response);
    } catch (error) {
      console.warn(error);
    }
  };

  const getAllDataSecond = async () => {
    try {
      const response = await fetch(
        "http://3.86.79.133/dijital-mentorluk-backend-test/public/test-data-calculate?source_id=12&fuel_type_id=12&fuel_id=12&unit_id=12&amount=12&facility=somestring&year=2022"
      );
      const data = await response.json();
      setConclusions(data);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    getAllDataFirst();
    getAllDataSecond();
  }, []);

  const customStyles = {
    // option: (styles) => ({
    //   ...styles,
    //   cursor: "pointer",
    // }),
    control: (styles) => ({
      ...styles,
      cursor: "pointer",
    }),
  };

  // console.log(formData);

  const id = useId();

  return (
    <div className={styles.container} onSubmit={onSubmitForm}>
      <div className={styles.firstArea}>
        <h1>GİRDİ ALANI</h1>
        <span>
          Lütfen salınım değerlerini hesaplamak için aşağıdaki alanları
          doldurun:
        </span>
        <div className={styles.formFields}>
          <h3>Facility</h3>
          <Select
            instanceId={id}
            styles={customStyles}
            options={options[OPTIONS_CATEGORY.facilities]}
            onChange={({ value }) =>
              setFormData({
                ...formData,
                facilities: value,
              })
            }
            defaultValue={formData.facilities}
          />
          <h3>Fuel Types</h3>
          <Select
            instanceId={id}
            styles={customStyles}
            options={options[OPTIONS_CATEGORY.fuel_types]}
            onChange={({ value }) =>
              setFormData({
                ...formData,
                fuelTypes: value,
              })
            }
            defaultValue={formData.fuelTypes}
          />
          <h3>Fuels</h3>
          <Select
            instanceId={id}
            styles={customStyles}
            options={options[OPTIONS_CATEGORY.fuels]}
            onChange={({ value }) =>
              setFormData({
                ...formData,
                units: value,
              })
            }
            defaultValue={formData.fuels}
          />
          <h3>Sources</h3>
          <Select
            instanceId={id}
            styles={customStyles}
            options={options[OPTIONS_CATEGORY.sources]}
            onChange={({ value }) =>
              setFormData({
                ...formData,
                sources: value,
              })
            }
            defaultValue={formData.sources}
          />
          <h3>Units</h3>
          <Select
            instanceId={id}
            styles={customStyles}
            options={options[OPTIONS_CATEGORY.units]}
            onChange={({ value }) =>
              setFormData({
                ...formData,
                fuels: value,
              })
            }
            defaultValue={formData.units}
          />
        </div>
      </div>
      <div className={styles.secondArea}>
        <h1>SONUÇ ALANI</h1>
        <span>
          Girdi Alanında girdiğiniz değerlere göre salınan gaz miktarları
          aşağıdaki gibidir:
        </span>
        <div className={styles.top1}>
          <div className={styles.top2}>
            <input type="text" value={conclusions.ch4 || ""} readOnly={true} />
            <Image className={styles.secondBox} alt="" src={WhiteLogo} />
            <div className={styles.textFirst}>
              <p className={styles.textTop}>CH</p>
              <p className={styles.textBottom}>4</p>
            </div>
          </div>
          <div className={styles.top2}>
            <input type="text" value={conclusions.co2 || ""} readOnly={true} />
            <Image className={styles.secondBox} alt="" src={WhiteLogo} />
            <div className={styles.textFirst}>
              <p className={styles.textTop}>CO</p>
              <p className={styles.textBottom}>2</p>
            </div>
          </div>
          <div className={styles.top2}>
            <input type="text" value={conclusions.co2e || ""} readOnly={true} />
            <Image className={styles.secondBox} alt="" src={WhiteLogo} />
            <div className={styles.textFirst}>
              <p className={styles.textTop}>CO</p>
              <p className={styles.textBottom}>2</p>
              <p className={styles.textZero}>e</p>
            </div>
          </div>
          <div className={styles.top2}>
            <input type="text" value={conclusions.no2 || ""} readOnly={true} />
            <Image className={styles.secondBox} alt="" src={WhiteLogo} />
            <div className={styles.textFirst}>
              <p className={styles.textTop}>N</p>
              <p className={styles.textBottom}>2</p>
              <p className={styles.textLast}>O</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <Button
          type="submit"
          onClick={handleClear}
          label="Sıfırla"
          disabled={!Object.values(formData).some((element) => element !== "")}
        />
        <Button
          type="submit"
          onClick={handleSave}
          label="Kaydet"
          disabled={Object.values(formData).some((element) => element == "")}
        />
      </div>
    </div>
  );
}
