import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { chageFavorite } from "../../redux/actions/holidays";
import { useDispatch } from "react-redux";
import { globalStyles } from "../../resources/globalStyle";

const Star = (props) => {
  const [isFavorite, setFavorite] = React.useState(props.isFavorite);
  React.useEffect(()=>{
      setFavorite(props.isFavorite)
  },[props.isFavorite])
  const fnDispatch = useDispatch();
  const fnHandleFavorite = () => {
    if(props.isDetails){
        setFavorite((prev)=>!prev)
    }
    fnDispatch(chageFavorite(props.id));
  };
  return (
    <AntDesign
      name={isFavorite ? "star" : "staro"}
      size={props.size}
      color="#F8E117"
      style={globalStyles.iconStar}
      onPress={fnHandleFavorite}
    />
  );
};

export default Star;
