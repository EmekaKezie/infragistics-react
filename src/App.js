import "./App.css";
import React, { useState, useEffect } from "react";
import {
  IgrGrid,
  IgrGridToolbar,
  IgrGridToolbarActions,
  IgrGridToolbarAdvancedFiltering,
  IgrGridToolbarHiding,
  IgrGridToolbarPinning,
  IgrGridToolbarExporter,
  IgrColumn,
  IgrDataGridModule,
} from "igniteui-react-grids";
import { IgrExcelModule } from "igniteui-react-excel";

import {
  ComponentRenderer,
  IgrDownloadingMultiScaleImageEventArgs,
  WebGridDescriptionModule,
} from "igniteui-react-core";
import {
  IgrButtonModule,
  IgrDialogModule,
  IgrDropdownItemModule,
  IgrDropdownModule,
  IgrInputModule,
  IgrRippleModule,
  IgrSelectModule,
  IgrTextareaModule,
} from "igniteui-react";

import "igniteui-react-grids/grids/combined";
import "igniteui-react-grids/grids/themes/light/bootstrap.css";

IgrDataGridModule.register();
IgrExcelModule.register();
IgrButtonModule.register();
IgrButtonModule.register();
IgrDialogModule.register();
IgrDropdownItemModule.register();
IgrDropdownModule.register();
IgrInputModule.register();
IgrRippleModule.register();
IgrSelectModule.register();
IgrTextareaModule.register();

function App() {
  const [data, setData] = useState([]);

  console.log("data", data);

  useEffect(() => {
    setData(AthletesData);

    // if (!renderer) {
    //   const newRenderer = new ComponentRenderer();
    //   const context = newRenderer.context;
    //   WebGridDescriptionModule.register(context);
    //   setRenderer(newRenderer);
    // }
  }, [data]);

  return (
    <div className="container sample ig-typography">
      <div className="container fill">
        <IgrGrid autoGenerate="false" data={data}>
          <IgrGridToolbar>
            <IgrGridToolbarActions>
              <IgrGridToolbarAdvancedFiltering />
              <IgrGridToolbarHiding />
              <IgrGridToolbarPinning />
              <IgrGridToolbarExporter />
              {/* <IgrDownloadingMultiScaleImageEventArgs/> */}
            </IgrGridToolbarActions>
          </IgrGridToolbar>
          <IgrColumn field="Name" header="Athlete" width="200px" />
          <IgrColumn field="CountryName" header="Country" width="200px" />
          <IgrColumn field="BeatsPerMinute" header="Beats Per Minute" />
          <IgrColumn field="TopSpeed" header="Top Speed" />
          <IgrColumn field="AthleteNumber" header="ID" />
          <IgrColumn field="TrackProgress" header="Progress" />
        </IgrGrid>
      </div>
    </div>
  );
}

export default App;

const AthletesData = [
  {
    Id: 84,
    Avatar: `https://static.infragistics.com/xplatform/images/people/men/12.jpg`,
    Position: `current`,
    Name: `Abel Brun`,
    AthleteNumber: 39315,
    BeatsPerMinute: 105,
    TopSpeed: 5.1,
    Registered: `2017-10-05T05:54:31-03:00`,
    TrackProgress: 25,
    CountryFlag: `https://static.infragistics.com/xplatform/images/flags/iso2/af.png`,
    CountryName: `Afghanistan`,
  },
];
