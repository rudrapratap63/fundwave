import React from "react";
import { Link } from "react-router-dom";


function Home() {
  return (
    <>
      <div className="min-h-screen gradient-bg-welcome text-white">
        <div className="text-3xl font-bold p-4">Schemes :-</div>
        <div>
          <h1 className="text-xl font-semibold p-4">Industry</h1>
          <ul className="list-disc list-inside">
            <li>
              <a className="hover:text-gray-400	" href="#I1">
                Pradhan Mantri Mudra Yojana (PMMY)
              </a>
            </li>
            <li>
              <a href="#I2" className="hover:text-gray-400	">
                Credit Guarantee Trust Fund for Micro & Small Enterprises (CGT
                SME)
              </a>
            </li>
          </ul>
        </div>
        <div className="px-4 py-6" id="I1">
          <h1 className="font-bold text-xl">1. Pradhan Mantri Mudra Yojana :- </h1>
          <h1 className="font-bold text-lg py-4">About the Scheme</h1>
          <p className="text-gray">
            Launched in 2015, Pradhan Mantri Mudra Yojana is meant to empower
            Indian entrepreneurs. Micro Units Development and Refinance Agency
            Bank (MUDRA) Banks provide loans up to 10 lakhs at low-interest
            rates to non-corporate, non-farm startups and small businesses. You
            can get these loans from any commercial bank, small finance banks,
            RRBs, MFIs, and NBFCs. As of August 6, 2021, the number of loans
            sanctioned for the F.Y. 2021-22 was 10955714, with INR 63444.00
            crores.
          </p>
          <h1 className="font-bold text-lg py-4">Documents required:</h1>
          <ul className="list-disc list-inside">
            <li>Business Plan</li>
            <li>Duly filled application form</li>
            <li>Recent passport-sized photographs</li>
            <li>
              KYC documents of Applicant and Co-applicants- Passport, Voter's
              I.D. card, Aadhar Card, Driving License, PAN card, Utility Bills
              (Water/Electricity Bills).
            </li>
            <li>Special category (SC/ST, OBC, minority) certificate</li>
            <li>Bank statement of last six months</li>
            <li>Business address and tenure proof, if applicable</li>
          </ul>
          <div>
          <Link to="/verify" className="bg-[#2952e3] mt-5 py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Apply for scheme
        </Link>

          </div>
        </div>
        <div className="px-4 py-6" id="I2">
          <h1 className="font-bold text-xl">
            2. Credit Guarantee Trust Fund for Micro & Small Enterprises :-{" "}
          </h1>
          <h1 className="font-bold text-lg py-4">About the Scheme</h1>
          <p>
            Today, aspiring entrepreneurs face a significant challenge in
            availing institutional credit due to a lack of collateral /
            third-party guarantees. The Government of India understands this
            very well. Therefore, the Ministry of Micro, Small & Medium
            Enterprises (MSME), Government of India, and SIDBI jointly set up
            the Credit Guarantee Fund Trust for Micro and Small Enterprises
            (CGTMSE) to catalyze the flow of institutional credit for small
            businesses and startups. The objective of this scheme is to
            strengthen the credit delivery system and facilitate the flow of
            credit to the MSE sector. Banks and financial institutions are
            provided credit guarantees by CGTMSE (Trust) under this scheme to
            lend collateral-free credit to MSEs. The Credit Guarantee reassures
            the lender that in case an MSE unit, which has availed
            collateral-free credit from it, by any chance fails to discharge its
            liabilities to the lender, the CGTMSE would make up that loss
            incurred by the lender.
          </p>
          <h1 className="font-bold text-lg py-4">Documents required:</h1>
          <ul className="list-disc list-inside">
            <li>Business Plan</li>
            <li>Duly filled application form</li>
            <li>Recent passport-sized photographs</li>
            <li>
              KYC documents of Applicant and Co-applicants- Passport, Voter's
              I.D. card, Aadhar Card, Driving License, PAN card, Utility Bills
              (Water/Electricity Bills).
            </li>
            <li>Special category (SC/ST, OBC, minority) certificate</li>
            <li>Bank statement of last six months</li>
            <li>Business address and tenure proof, if applicable</li>
          </ul>
          <Link to='/verify' className="bg-[#2952e3] mt-5 py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Apply for scheme
        </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
