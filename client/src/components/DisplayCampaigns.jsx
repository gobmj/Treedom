import React from 'react';
import {useNavigate} from 'react-router-dom';
import {v4 as uuidv4} from "uuid";
import FundCard from './FundCard';


const DisplayCampaigns = ({title, isLoading, plantListings, campaigns}) => {
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
                {plantListings.map((data, i) => (
                    <FundCard key={i} {...data} handleClick={() => console.log("")}/>
                ))}
            </div>
        </div>
    )
}

export default DisplayCampaigns
