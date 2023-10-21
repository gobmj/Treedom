import React from 'react';
import {useNavigate} from 'react-router-dom';
import {v4 as uuidv4} from "uuid";
import FundCard from './FundCard';
import mango1 from '../assets/mango1.jpg';
import mango2 from '../assets/mango2.png';
import coco from '../assets/coco1.jpg';

const plantListings = [
    {
        location: "Kalamassery",
        plantName: "Coconut Tree",
        description: "A tall and majestic coconut tree suitable for tropical climates.",
        owner: "naji",
        price: 50,
        quantityAvailable: 5,
        image: coco
    },
    {
        location: "CUSAT (Cochin University of Science and Technology)",
        plantName: "Mango Tree",
        description: "A mature mango tree with delicious mangoes.",
        price: 40,
        owner: "naji",
        quantityAvailable: 8,
        image: mango1
    },
    {
        location: "Angamaly",
        plantName: "Mango Tree",
        description: "An exquisite mango tree with sweet and juicy mangoes.",
        price: 45,
        owner: "naji",
        quantityAvailable: 6,
        image: mango2
    },
];

const DisplayCampaigns = ({title, isLoading, campaigns}) => {
    const navigate = useNavigate();

    const handleNavigate = (campaign) => {
        navigate(`/campaign-details/${campaign.title}`, {state: campaign})
    }

    return (
        <div>
            <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">{title} ({campaigns.length})</h1>

            <div className="flex flex-wrap mt-[20px] gap-[26px]">
                {isLoading && (
                    <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain"/>
                )}

                {/*{!isLoading && campaigns.length === 0 && (*/}
                {/*  // <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">*/}
                {/*  //   You have not created any campigns yet*/}
                {/*  // </p>*/}
                {/*)}*/}

                {/*{!isLoading && campaigns.length > 0 && campaigns.map((campaign) => <FundCard*/}
                {/*  key={uuidv4()}*/}
                {/*  {...campaign}*/}
                {/*  handleClick={() => handleNavigate(campaign)}*/}
                {/*/>)}*/}
                {plantListings.map((data, i) => (
                    <FundCard key={i} {...data} handleClick={() => console.log("")}/>
                ))}
            </div>
        </div>
    )
}

export default DisplayCampaigns
