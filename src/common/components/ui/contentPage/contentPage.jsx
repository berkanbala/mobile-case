"use client";
import { useEffect, useState } from "react";
import styles from "@/common/components/ui/contentPage/contentPage.module.scss";
import Select from "react-select";
import WhiteLogo from "@/common/media/1.png";
import Image from "next/image";

export default function ContentPage() {
  const [industryData, setIndustryData] = useState([]);
  const [optionFacilitiesData, setOptionFacilitiesData] = useState([]);
  const [optionFuelTypesData, setOptionFuelTypesData] = useState([]);
  const [optionUnitsData, setOptionUnitsData] = useState([]);
  const [sourcesData, setSourcesData] = useState([]);
  const [fuelsData, setFuelsData] = useState([]);
  const [formData, setFormData] = useState({
    facilities: "",
    fuelTypes: "",
    units: "",
    sources: "",
    fuels: "",
  });
  const [conclusions, setConclusions] = useState([]);
  const [form, setForm] = useState("");
  const [cart, setCart] = useState([]);
  const [customerName, setCustomerName] = useState("");

  const onSubmitForm = (e) => {
    e.preventdefault();
    setForm(form);
    setCustomerName("");
  };

  const buttonRemove = () => {
    setCart([]);
    console.log("tıklandı");
  };

  const buttonSave = () => {
    setForm();
    console.log("tıklandı2");
  };

  const getAllDataFirst = async () => {
    try {
      const response = await fetch(
        "http://3.86.79.133/dijital-mentorluk-backend-test/public/test-data"
      );
      const data = await response.json();
      setIndustryData(data);
      console.log(data);
      const optionFacilities = data.facilities.map((item) => {
        return { value: item, label: item };
      });
      const optionFuelTypes = data.fuel_types.map((item) => {
        return { value: item.name_tr, label: item.name_tr };
      });
      const optionUnits = data.units.map((item) => {
        return { value: item.name_tr, label: item.name_tr };
      });
      const optionsSources = data.sources.map((item) => {
        return { value: item.name_tr, label: item.name_tr };
      });
      const optionsFuels = data.fuels.map((item) => {
        return { value: item.name_tr, label: item.name_tr };
      });
      setFuelsData([...optionsFuels]);
      setSourcesData([...optionsSources]);
      setOptionUnitsData([...optionUnits]);
      setOptionFuelTypesData([...optionFuelTypes]);
      setOptionFacilitiesData([...optionFacilities]);
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
      console.log(data);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    getAllDataFirst();
    getAllDataSecond();
  }, []);

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
            options={optionFacilitiesData}
            onChange={({ label }) =>
              setFormData({
                ...formData,
                facilities: label,
              })
            }
          />
          <h3>Fuel Types</h3>
          <Select
            options={optionFuelTypesData}
            onChange={({ label }) =>
              setFormData({
                ...formData,
                fuelTypes: label,
              })
            }
          />
          <h3>Fuels</h3>
          <Select
            options={optionUnitsData}
            onChange={({ label }) =>
              setFormData({
                ...formData,
                units: label,
              })
            }
          />
          <h3>Sources</h3>
          <Select
            options={sourcesData}
            onChange={({ label }) =>
              setFormData({
                ...formData,
                sources: label,
              })
            }
          />
          <h3>Units</h3>
          <Select
            options={fuelsData}
            onChange={({ label }) =>
              setFormData({
                ...formData,
                fuels: label,
              })
            }
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
      <div className={styles.ads}>
        <button type="submit" onClick={buttonRemove}>
          Sıfırla
        </button>
        <button type="submit" onClick={buttonSave}>
          Kaydet
        </button>
      </div>
    </div>
  );
}
