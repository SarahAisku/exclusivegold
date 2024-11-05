import React from "react";

import ImageSlider from './ImageSlider';

const ImageSliderMain = () =>{

    const images = [
        "https://lh3.googleusercontent.com/pw/AJFCJaWMQdEVDQTVPmJT4qWezQH9LeqzTxjCSZB_8evIERPYlnGOSm_03YilADMuSsnF2_ESEUBnLkmgH_MbssFpOU_E6nvLft5-9IlHj4NFZUBjwprCTNJ_sout9FV9qo2-Ykk8RWLlwk0pFOgxpePREa0M1A=w729-h912-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AJFCJaXcg2XGNPYNu8Of0AbdlSsyp4LRCSUuqmH4-qm65nafN2XBmkTT52xrphdtgo-2_NZsvHtyF9FRWURqMh3xtRsBdrkYWZ04e8LxmT-_mlsSPW8SSeDXnn_Wp3BC4IMzihCMbS4UnSaz47RHBLpmy-OwTw=w729-h912-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AJFCJaU1D80BfOi5TfqzGUyYQVoIoz_tHPxdSGdRLO6OPdzJM0rgeK5KOG5wKKhhlENYrC6LmoK9urpfpL890EbZFIpL2gbLIoqQuBlIVT6yiTTNFpv5Td7c0K1A3UntK7n8BeMo1fai4PNmg2oQwEwVR4Sa0Q=w662-h827-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AJFCJaXayWT-ScBgS-kOdRrMaUqDje8qrvGyS4dLTJuScDjBwOFADEeB3cKPOshsgiw1DxTv1o7ydZHSuN5h86FePGjkOqQ5zJJF-G9zJjtr27f6MB3MeVrnjoOGL7NTVrID7rQQhHKv94kkXYdGW5VYTpiYkQ=w662-h827-s-no?authuser=0",
    ];

    return(
            <ImageSlider images={images} />
    )
}

export default ImageSliderMain;