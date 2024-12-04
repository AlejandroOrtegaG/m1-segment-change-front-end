import "../styles/InStorage.css";
import Hexagon from "./Hexagon";
import inStorage from "../data/InStorage";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";

const Storage = () => {
  return (
    <Card className="storage-card">
      <CardHeader title="En almacén" className="title" />
      <CardContent>
        <div className="storage-segments">
          {inStorage.map((item, index) => (
            <Hexagon key={index} className="stored-segment"></Hexagon>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Storage;
