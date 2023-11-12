import React, { useEffect } from "react";
import styles from "components/concrete/rocks/style.module.css";
import PriceBox from "components/abstract/priceBox";
import { useDispatch, useSelector } from "react-redux";
import {
  getDiamond,
  getEmerald,
  getRuby,
  getSaphir,
} from "redux/strapi/action";
import diamond from "static/img/765093.png";
import emerald from "static/img/Emerald-Stone-PNG-Free-Download.png";
import saphir from "static/img/5bab83a4554c7f08176ec014.png";
import ruby from "static/img/58c582a409e8bc1b42c7794d.png";
import { BiRefresh } from "react-icons/bi";
import { Oval } from "react-loader-spinner";
function Rocks() {
  const strapi = useSelector((state) => state.strapi);
  const dispatch = useDispatch();
  const priceTable = [];
  useEffect(() => {
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
  }, [strapi]);

  function refresh(){
    dispatch(getDiamond());
    dispatch(getEmerald());
    dispatch(getSaphir());
    dispatch(getRuby());
  }
  return (
    <>
      <div className={styles.mainBox}>
      {strapi.loading ? 
           <Oval
           height={80}
           width={80}
           color="#4299e1d9"
           wrapperStyle={{}}
           wrapperClass=""
           visible={true}
           ariaLabel='oval-loading'
           secondaryColor="#4fa94d"
           strokeWidth={2}
           strokeWidthSecondary={2}
         
         />
         :
         null

          }
        <div className={styles.Box}>
          <div className={styles.Titles}>
            <h4>Cours des pierres</h4>
            
            <BiRefresh size={35} onClick={() => {refresh()}} style={{cursor: "pointer"}}/>
          </div>
          <div className={styles.priceBoxContain}>
            <PriceBox
              Title={"Diamant"}
              data={strapi.diamondTable ? strapi.diamondTable : null}
              logo={diamond}
              price={strapi.diamondLastPrice ? strapi.diamondLastPrice : null}
              pourcent={strapi.diamondPourcent ? strapi.diamondPourcent : null}
              noMarge={true}
            />
            <PriceBox
              Title={"Emeraude"}
              data={strapi.emeraldTable ? strapi.emeraldTable : null}
              logo={emerald}
              price={strapi.emeraldLastPrice ? strapi.emeraldLastPrice : null}
              pourcent={strapi.emeraldPourcent ? strapi.emeraldPourcent : null}
            />
            <PriceBox
              Title={"Saphir"}
              data={strapi.saphirTable ? strapi.saphirTable : null}
              logo={saphir}
              price={strapi.saphirLastPrice ? strapi.saphirLastPrice : null}
              pourcent={strapi.saphirPourcent ? strapi.saphirPourcent : null}
            />
            <PriceBox
              Title={"Ruby"}
              data={strapi.rubyTable ? strapi.rubyTable : null}
              logo={ruby}
              price={strapi.rubyLastPrice ? strapi.rubyLastPrice : null}
              pourcent={strapi.rubyPourcent ? strapi.rubyPourcent : null}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Rocks;
