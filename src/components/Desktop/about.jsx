import React from "react";
import Foto1 from "../../payapi-multi-page-website/starter-code/assets/shared/desktop/google.svg";
import Foto2 from "../../payapi-multi-page-website/starter-code/assets/shared/desktop/microsoft.svg";
import Foto3 from "../../payapi-multi-page-website/starter-code/assets/shared/desktop/nvidia.svg";
import Foto4 from "../../payapi-multi-page-website/starter-code/assets/shared/desktop/tesla.svg";
import Foto5 from "../../payapi-multi-page-website/starter-code/assets/shared/desktop/hewlett-packard.svg";
import Foto6 from "../../payapi-multi-page-website/starter-code/assets/shared/desktop/oracle.svg";
// import Foto1
// import Foto1
// import Foto1
// import Foto1
// import Foto1

export default function about() {
  return (
    <div className="aboutDiv">
      <div className="aboutDiv2">
        <h1 className="aboutH1">Who we work with</h1>
        <h4 className="aboutH4">
          Today, millions of people around the world have successfully connected
          their accounts to apps they love using our API. We provide developers
          with the tools they need to create easy and accessible experiences for
          their users.
        </h4>
        <button className="aboutButton">About Us</button>
      </div>
      <div className="forGrid">
        <div className="grid_item">
          <img src={Foto1} className="fotos"  alt="" />
        </div>
        <div className="grid_item">
          <img src={Foto2}className="fotos"  alt="" />
        </div>
        <div className="grid_item">
          <img src={Foto3} className="fotos"  alt="" />
        </div>
        <div className="grid_item">
          <img src={Foto4} className="fotos"  alt="" />
        </div>
        <div className="grid_item">
          <img src={Foto5} className="fotos"  alt="" />
        </div>
        <div className="grid_item">
          <img src={Foto6} className="fotos" alt="" />
        </div>
      </div>
    </div>
  );
}
