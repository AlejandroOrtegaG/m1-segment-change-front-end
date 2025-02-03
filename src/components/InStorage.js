import "../styles/InStorage.css";
import inStorage from "../data/InStorage";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { HexGrid, Layout, Hexagon } from "react-hexgrid";

const Storage = () => {

  const i = 3;
  return (
    <Card className="storage-card">
      <CardHeader title="En almacén" className="title" />
      <CardContent>
        <div className="storage-segments">
          <HexGrid width={200}  viewBox="0 0 50 100">
            <Layout
              size={{ x: 11, y: 11 }}
              flat={true}
              spacing={1.2}
              origin={{ x: 25, y: 60 }}
            >
              {inStorage.map((item, index) => (
                <Hexagon 
                key={index}
                q={0}
                s={3-index}
                r={-i+index}
                
                className="stored-segment"></Hexagon>
              ))}
            </Layout>
          </HexGrid>
        </div>
      </CardContent>
    </Card>
  );
};

export default Storage;
