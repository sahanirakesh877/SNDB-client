import React from "react";
import MembershipForm from "../components/MembershipForm";
import { Helmet } from "react-helmet";

const MemberShip: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Membership | Society of Nepal Doctors of Bangladesh</title>

        {/* Meta description for SEO */}
        <meta
          name="description"
          content="Join the Society for Nepalese Doctors from Bangladesh (SNDB) and be part of a professional network. Learn more about membership benefits, requirements, and how you can contribute to improving healthcare in Nepal."
        />

        {/* Keywords for the page */}
        <meta
          name="keywords"
          content="SNDB membership, join SNDB, Nepalese doctors, Bangladesh doctors, healthcare professionals, SNDB membership benefits, medical professionals in Nepal"
        />
      </Helmet>

      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {/* left section */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-red-500">
                Membership Info
              </h1>

              {/* Life Membership Info */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                  Pre-requisite of Life Membership of SNDB
                </h2>
                <p className="text-gray-600 mb-4">
                  Surgeons who are registered to Nepal Medical Council and
                  fulfilling any one of the following criteria can apply for
                  life membership of SNDB:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm">
                  <li>
                    MCh or equivalent from a recognized institute and recognized
                    by Nepal Medical Council as Gastrointestinal surgeon.
                  </li>
                  <li>
                    MS or equivalent from a recognized institute with 5 years of
                    experience in the field of surgical gastroenterology.
                  </li>
                  <li>
                    Three years of experience in the field of surgical
                    gastroenterology following MS or equivalent from a
                    recognized institute with one year clinical fellowship in
                    surgical gastroenterology.
                  </li>
                </ul>
                <p className="mt-4 font-semibold text-gray-700">
                  Life Membership Fee – NRS 5,000.00
                </p>
              </div>

              {/* Associate Membership Info */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                  Pre-requisite of Associate Membership of SNDB
                </h2>
                <p className="text-gray-600 mb-4 text-sm">
                  Doctors related to other fraternities of medical sciences
                  except surgical gastroenterology, as well as non-medical
                  personnel who are interested in becoming a member, can apply.
                </p>
                <p className="font-semibold text-gray-700">
                  Associate Membership Fee – NRS 2,000.00
                </p>
              </div>

              {/* Honorary Members Info */}
              <div className="mb-2">
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                  Honorary Members
                </h2>
                <p className="text-gray-600  text-sm">
                  Doctors and non-medical personnel, both national and
                  international citizens, who have made significant
                  contributions to the field of surgical gastroenterology or to
                  the organization as decided by the executive committee
                  meeting.
                </p>
              </div>

              {/* Membership Form Instructions */}
              <div className="mb-2">
                <p className="text-gray-600 text-sm">
                  Prospective members are requested to download the membership
                  form from the link below. The form can be filled and submitted
                  with the required documents to the secretary, or the filled
                  form can be scanned along with a scanned copy of the necessary
                  documents and proof of payment of the membership fee, and sent
                  to
                  <a
                    href="mailto:info@sndb.org.np"
                    className="text-blue-600 underline ml-1"
                  >
                    info@sndb.org.np
                  </a>
                  .
                </p>
              </div>

              {/* Account Details */}
              <div className="mt-3">
                <h2 className="text-xl font-semibold text-gray-700 -mb-4">
                  Account Details for Payment of Membership Fee:
                </h2>
                <p className="text-gray-600">
                  <br />
                  <strong>Bank:</strong> Prabhu Bank, Kalanki Branch
                  <br />
                  <strong>Account Name:</strong>Society For Nepalese Doctors
                  from Bangladesh (SNDB)
                  <br />
                  <strong>Account Type:</strong> Current Account NPR
                  <br />
                  <strong>Account Number:</strong> 198263977281648
                </p>
              </div>
            </div>
            {/* right section */}
            <MembershipForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default MemberShip;
