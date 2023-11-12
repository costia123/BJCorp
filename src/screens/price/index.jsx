import { LineChart } from "@mui/x-charts";
import Header from "components/concrete/header";
import React, { useEffect, useState } from "react";
import {
  getDiamond,
  getEmerald,
  getRuby,
  getSaphir,
} from "redux/strapi/action";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styles from "screens/price/styles.module.css";
import moment from "moment";
import { ThemeProvider, createTheme } from "@mui/material";
import Footer from "components/concrete/footer";
import { Oval } from "react-loader-spinner";
function Price(props) {
  const dispatch = useDispatch();
  const strapi = useSelector((state) => state.strapi);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [type, setType] = useState(null);
  useEffect(() => {
    const asyncGetType = async () => {
      const path = location.pathname.split("/");
      setType(path[2]);
      console.log(type);
      setIsLoading(false);
    };
    if (isLoading) {
      asyncGetType();
    }
    if (
      !strapi.diamondTable &&
      !strapi.emeraldTable &&
      !strapi.saphirTable &&
      !strapi.rubyTable
    ) {
      dispatch(getDiamond());
      dispatch(getEmerald());
      dispatch(getSaphir());
      dispatch(getRuby());
    }
  }, [isLoading]);
  if (isLoading || !strapi.rubyTable)
    return (
      <Oval
        height={80}
        width={80}
        color="#4299e1d9"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    );
  else {
    const lineChartsParams = {
      series: [
        {
          label: `Prix du ${type}`,
          data:
            type === "Diamant"
              ? strapi.diamondTable
              : type === "Emeraude"
              ? strapi.emeraldTable
              : type === "Saphir"
              ? strapi.saphirTable
              : type === "Ruby"
              ? strapi.rubyTable
              : null,
        },
      ],
      sx: {
        "--ChartsLegend-itemWidth": "200px",
      },
      width: 800,
      height: 600,
    };
    const lineChartsParamsMobile = {
      series: [
        {
          label: `Prix du ${type}`,
          data:
            type === "Diamant"
              ? strapi.diamondTable
              : type === "Emeraude"
              ? strapi.emeraldTable
              : type === "Saphir"
              ? strapi.saphirTable
              : type === "Ruby"
              ? strapi.rubyTable
              : null,
        },
      ],
      sx: {
        "--ChartsLegend-itemWidth": "200px",
      },
      width: 400,
      height: 600,
    };
    const newTheme = createTheme({ palette: { mode: "dark" } });
    const yearFormater = (date) => moment(date).format("DD/MM");
    const currencyFormatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format;
    return (
      <>
        <div className={styles.background}>
          <Header />
          <div className={styles.Core}>
            <div></div>
            <div className={styles.infoCard}>
              <div className={styles.infoUp}>
                <h3>{type}</h3>
                <h3>
                  $
                  {type === "Diamant"
                    ? strapi.diamondLastPrice
                    : type === "Emeraude"
                    ? strapi.emeraldLastPrice
                    : type === "Saphir"
                    ? strapi.saphirLastPrice
                    : type === "Ruby"
                    ? strapi.rubyLastPrice
                    : null}
                </h3>
              </div>
              <div className={styles.pc}>
              <ThemeProvider theme={newTheme}>
                <LineChart
                  {...lineChartsParams}
                  xAxis={[
                    {
                      data:
                        type === "Diamant"
                          ? strapi.diamondDate
                          : type === "Emeraude"
                          ? strapi.emeraldDate
                          : type === "Saphir"
                          ? strapi.saphirDate
                          : type === "Ruby"
                          ? strapi.rubyDate
                          : null,
                      scaleType: "time",
                      valueFormatter: yearFormater,
                    },
                  ]}
                  series={lineChartsParams.series.map((s) => ({
                    ...s,
                    valueFormatter: currencyFormatter,
                    area: true,
                  }))}
                />
              </ThemeProvider>
              </div>
              <div className={styles.mobile}>
              <ThemeProvider theme={newTheme}>
                <LineChart
                  {...lineChartsParamsMobile}
                  xAxis={[
                    {
                      data:
                        type === "Diamant"
                          ? strapi.diamondDate
                          : type === "Emeraude"
                          ? strapi.emeraldDate
                          : type === "Saphir"
                          ? strapi.saphirDate
                          : type === "Ruby"
                          ? strapi.rubyDate
                          : null,
                      scaleType: "time",
                      valueFormatter: yearFormater,
                    },
                  ]}
                  series={lineChartsParamsMobile.series.map((s) => ({
                    ...s,
                    valueFormatter: currencyFormatter,
                    area: true,
                  }))}
                />
              </ThemeProvider>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Price;
