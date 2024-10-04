import React from "react";
import { FaPlay } from "react-icons/fa";

const page = () => {
  return (
    <>
      <div className="bg-[url('/contact/contact.png')] bg-no-repeat bg-cover bg-center w-full ">
        <div className="w-full max-w-[1200px] mx-auto px-[16px] flex flex-row max-lg:flex-col py-[250px] max-sm:py-[100px]">
          <div className="w-[50%] flex flex-col max-lg:w-full max-lg:items-center max-lg:justify-center">
            <h3 className="font-Nunito font-[600] text-white text-[16px] sm:text-[18px] lg:text-[20px]">
              SAVE TIME, SHIP SMARTER
            </h3>
            <img
              src="/Integration/blue-line.png"
              alt="line"
              className=" w-[200px] sm:w-[250px] object-cover object-center mt-6"
            />
            <h1 className="font-Lato font-[600] text-white text-[40px] sm:text-[50px] lg:text-[60px] mt-2 leading-[64px]">
              END-USER LICENSE AGREEMENT​
            </h1>
            <p className="cursor-pointer font-Nunito font-[400] text-white text-[20px] sm:text-[24px] lg:text-[30px]">
              Transform your shipping with a smarter,
              <br className="hidden max-lg:block" /> faster, more efficient
              process
            </p>
            <h2 className="cursor-pointer font-Nunito font-[400] text-white text-[22px] sm:text-[26px] lg:text-[30px]">
              LEARN MORE
            </h2>
          </div>
          <div className="w-[50%] flex flex-row max-sm:flex-col gap-4 max-sm:gap-2 pt-4 items-end justify-end max-lg:w-full max-lg:items-center max-lg:justify-center max-lg:gap-16">
            <button className="bg-white text-[#7A0B99] font-Lato font-[700] text-[16px] sm:text-[18px] lg:text-[20px] rounded-[15px] px-[40px] py-[20px]">
              Schedule a Demo
            </button>
            <button className="flex justify-center items-center gap-2 bg-transparent text-white font-Lato font-[700] text-[16px] sm:text-[18px] lg:text-[20px] rounded-[15px] px-[40px] py-[20px] border-2 border-white border-solid">
              <FaPlay color="white" />
              Watch Video
            </button>
          </div>
        </div>
      </div>

      <div className=" w-full">
        <div className=" w-full max-w-[1200px] mx-auto px-[16px] py-[50px]">
          <h1 className=" text-center text-[#019818] font-lato font-[700] text-[35px]">
            END-USER LICENSE AGREEMENT
          </h1>
          <p className=" text-center font-Lato font-[600] text-[20px] text-black hover:text-[#007EFF] cursor-pointer mt-1">
            WWW.SHIPLEAP.COM
          </p>
          <p className=" text-center text-[#646464] font-[600] font-lato text-[20px] pb-[50px]">
            SHIPLEAP™ & Paragon W2P LLC
          </p>

          <div className=" font-Lato text-[#646464] font-[400] text-[16px]">
            <p className="pb-4">
              PLEASE READ CAREFULLY BEFORE USING THIS PRODUCT: This End­User
              License Agreement (“EULA”) is a legal agreement between (a) you
              (either an individual or a single entity) and (b) Paragon W2P LLC.
              An amendment or addendum to this EULA may accompany SHIPLEAP™.
            </p>

            <p className="pb-4">
              BY CLICKING “I AGREE,” THEREBY BREAKING THE SEAL ON SHIPLEAP™, OR
              OTHERWISE TAKING ANY STEP TO INSTALL OR USE SHIPLEAP™, YOU AGREE
              TO BE BOUND BY THE TERMS OF THIS EULA.
            </p>

            <p className="pb-4">
              IF YOU DO NOT AGREE TO THE TERMS OF THIS EULA, DO NOT INSTALL OR
              USE THE SOFTWARE PRODUCT.
            </p>

            <h1 className=" pb-4">SECTION 1: DEFINITIONS</h1>
            <p className=" pb-4">
              1.1. “You” or “Your” shall mean the entity or individual that
              installs and/or uses the Software Product.
            </p>
            <p className=" pb-4">
              1.2. “Redistributable Software” shall mean the redistributable
              open source libraries referenced in Attachment “A’ to this
              Agreement.
            </p>
            <p>
              1.3. “Software Product” shall mean computer software and may
              include associated media, printed materials and “online” or
              electronic documentation delivered with SHIPLEAP™.
            </p>
            <h1 className=" py-4">SECTION 2: GRANT OF LICENSE</h1>
            <p className=" py-2">
              Paragon W2P LLC grants you the following non­exclusive license
              provided you agree to and comply with all terms and conditions of
              this EULA:
            </p>
            <p className=" py-2">
              2.1. Installation and Use. You may install and use the Software
              Product only as integrated with SHIPLEAP™. You may not separate
              component parts of the Software Product from SHIPLEAP™. You do not
              have the right to distribute the Software Product to any other
              individuals or entities. You may load the Software Product into
              Your Computer’s temporary memory (RAM) only for purposes of using
              SHIPLEAP™.
            </p>
            <p className=" py-2">
              2.2. Storage. The Software Product may only be stored or copied
              into SHIPLEAP™ and may not be separated from SHIPLEAP™.
            </p>
            <p className=" py-2">
              2.3. Reproduction and Redistribution Prohibited. Reproduction and
              redistribution of the Software Product is strictly prohibited for
              any and all reasons except as provided for in Section 2.4, below.
              Unauthorized reproduction and/or redistribution of the Software
              Product or failure to comply with the above restrictions will
              result in automatic termination of this Agreement and will
              constitute immediate, irreparable harm to Paragon W2P LLC for
              which monetary damages would be an inadequate remedy, in which
              case injunctive relief will be an appropriate remedy for such
              breach.
            </p>
            <p className=" py-2">
              2.4. Open-Source Software Components. Notwithstanding the terms
              and conditions of this EULA, all or any portion of the Software
              Product which constitutes non­proprietary software or software
              provided under public license by third parties (“Free and
              Open-Source Software,”) is licensed to you subject to the terms
              and conditions of the software license agreement accompanying such
              Freeware whether in the form of a discrete agreement, shrink wrap
              license or electronic license terms accepted at time of download.
              Use of the Freeware by you shall be governed entirely by the terms
              and conditions of such license. Descriptions of such Free and
              Open-Source Software components can be found in Attachment “A” of
              this Agreement.
            </p>
            <p className=" py-2">
              2.5. Reservation of Rights. The Software Product is licensed, not
              sold, to you by Paragon W2P LLC Paragon W2P LLC and its suppliers
              own all rights, title and interest in and to the Software Product
              and reserve all rights not expressly granted to you in this EULA.
              You agree to refrain from any action that would diminish such
              rights or would call them into question.
            </p>
            <p>
              2.5. Additional Licensing Obligations. You acknowledge and agree
              that your use of certain third party components included with the
              Software Product may be subject to additional licensing terms and
              conditions as set forth or referenced in Attachment A of this
              Agreement.
            </p>
            <h1 className=" py-4">SECTION 3: LIMITATIONS</h1>
            <p className=" py-2">
              3.1. No Reverse Engineering. You may not reverse engineer,
              decompile, disassemble or create derivative works of the Software
              Product, except and only to the extent that the right to do so is
              mandated under applicable law.
            </p>
            <p className=" py-2">
              3.2. No Separation of Components. The Software Product is licensed
              as a single product. Except as authorized in this Agreement,
              Software component parts of the Software may not be separated for
              use on more than one computer, nor otherwise used separately from
              the other parts.
            </p>
            <p>
              3.3. No Rental. You may not rent or lease the Software Product to
              any other individual or entity for any reason.
            </p>
            <h1 className=" py-4">SECTION 4: TERM & TERMINATION</h1>
            <p className=" py-2">
              4.1. Term. This EULA is effective unless terminated or rejected.
            </p>
            <p className=" py-2">
              4.2. Termination. This EULA will terminate upon conditions set
              forth elsewhere in this EULA or at the exclusive right of Paragon
              W2P LLC
            </p>
            <p className=" py-2">
              This Agreement will automatically terminate if you fail to comply
              with any of the terms and conditions hereof.
            </p>
            <p>
              4.3. Effect of Termination. In the event of termination, you must
              destroy all copies of the Software Product and all of its
              component parts.
            </p>
            <h1 className=" py-4">SECTION 5: UPGRADES & ADDITIONAL SOFTWARE</h1>
            <p className=" py-2">
              5.1. Upgrades. To use a Software Product identified as an upgrade,
              you must first be licensed for the original Software Product
              identified by Paragon W2P LLC as eligible for the upgrade. After
              upgrading, you may no longer use the original Software Product
              that formed the basis for your upgrade eligibility.
            </p>
            <p>
              5.2. Additional Software. This EULA applies to updates or
              supplements to the original Software Product provided by Paragon
              W2P LLC unless Paragon W2P LLC provides other terms along with the
              update or supplement. In case of a conflict between such terms,
              the other terms will prevail.
            </p>
            <h1 className=" py-4">
              SECTION 6: PROPRIETARY RIGHTS & INTELLECTUAL PROPERTY
            </h1>
            <p>
              All intellectual property rights in the Software Product and user
              documentation are owned by Paragon W2P LLC or its suppliers and
              are protected by law, including but not limited to U.S. copyright,
              trade secret, and trademark law, as well as other applicable laws
              and international treaty provisions. The structure, organization
              and code of the Software Product are the valuable trade secrets
              and confidential information of Paragon W2P LLC and its suppliers.
              You shall not remove any product identification, copyright notices
              or proprietary restrictions from the Software Product.
            </p>
            <h1 className=" py-4">
              SECTION 7: DISCLAIMER OF WARRANTIES AND LIMITATIONS ON LIABILITY
            </h1>
            <p className=" py-2">
              7.1. NO WARRANTIES. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE
              LAW, Paragon W2P LLC AND ITS SUPPLIERS PROVIDE THE SOFTWARE
              PRODUCT “AS IS” AND WITH ALL FAULTS, AND HEREBY DISCLAIM ALL OTHER
              WARRANTIES AND CONDITIONS, EITHER EXPRESS, IMPLIED, OR STATUTORY,
              INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF TITLE AND
              NON­INFRINGEMENT, ANY IMPLIED WARRANTIES, DUTIES OR CONDITIONS OF
              MERCHANTABILITY, OF FITNESS FOR A PARTICULAR PURPOSE, AND OF LACK
              OF VIRUSES ALL WITH REGARD TO THE SOFTWARE PRODUCT. NO ORAL OR
              WRITTEN INFORMATION OR ADVICE GIVEN BY Paragon W2P LLC OR A
              Paragon W2P LLC AUTHORIZED REPRESENTATIVE SHALL CREATE A WARRANTY.
            </p>
            <p>
              7.2. NO WARRANTIES AS TO THIRD-PARTY COMPONENTS. IN NO EVENT DOES
              Paragon W2P LLC PROVIDE ANY WARRANTY OR REPRESENTATIONS WITH
              RESPECT TO ANY THIRD PARTY HARDWARE OR SOFTWARE WITH WHICH
              SHIPLEAP™ IS DESIGNED TO BE USED, AND Paragon W2P LLC DISCLAIMS
              ALL LIABILITY WITH RESPECT TO ANY FAILURES THEREOF.
            </p>
            <p className=" py-2">
              7.3. NO LIABILITY FOR CONSEQUENTIAL DAMAGES. TO THE MAXIMUM EXTENT
              PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL Paragon W2P LLC OR
              ITS SUPPLIERS BE LIABLE FOR ANY SPECIAL, INCIDENTAL, INDIRECT, OR
              CONSEQUENTIAL DAMAGES WHATSOEVER (INCLUDING, BUT NOT LIMITED TO,
              DAMAGES FOR LOSS OF PROFITS, FOR LOSS OF DATA OR OTHER
              INFORMATION, FOR BUSINESS INTERRUPTION, FOR PERSONAL INJURY, FOR
              LOSS OF PRIVACY ARISING OUT OF OR IN ANY WAY RELATED TO THE USE OF
              OR INABILITY TO USE THE SOFTWARE PRODUCT, OR OTHERWISE IN
              CONNECTION WITH ANY PROVISION OF THIS EULA), EVEN IF Paragon W2P
              LLC OR ANY SUPPLIER HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
              DAMAGES AND EVEN IF THE REMEDY FAILS OF ITS ESSENTIAL PURPOSE.
            </p>
            <p className=" py-2">
              7.4. NO SUPPORT. Paragon W2P LLC HAS NO OBLIGATION TO SUPPORT OR
              TO PROVIDE ANY UPDATES OF THE SOFTWARE PRODUCT.
            </p>
            <p className=" py-2">
              Computer software is inherently subject to bugs and potential
              incompatibility with other computer software and hardware. You
              should not use the Software Product for any applications in which
              failure could cause any significant damage or injury to persons or
              tangible or intangible property.
            </p>
            <p className=" py-2">
              Some states/jurisdictions do not allow exclusion of implied
              warranties or limitations on the duration of implied warranties,
              so the above disclaimer may not apply to you in its entirety
            </p>
            <p>
              Some states/jurisdictions do not allow the exclusion or limitation
              of incidental or consequential damages, so the above limitation or
              exclusion may not apply to you.
            </p>

            <h1 className=" py-4">SECTION 8: FEEDBACK</h1>
            <p className=" py-2">
              8.1. Feedback. Notwithstanding any Non-Disclosure Agreement
              executed by and between the parties, the parties agree that in the
              event you or Paragon W2P LLC provides Feedback (as defined below)
              to the other party on how to design, implement, or improve the
              Software Product or your product(s) for use with the Software
              Product, the following terms and conditions apply the Feedback:
            </p>
            <p>
              8.2. Exchange of Feedback. Both parties agree that neither party
              has an obligation to give the other party any suggestions,
              comments or other feedback, whether verbally or in written or
              source code form, relating to (i) the Software Product; (ii) your
              products; (iii) your use of the Software Product; or (iv)
              optimization/interoperability of you product with the Software
              Product (collectively defined as “Feedback”). In the event either
              party provides Feedback to the other party, the party receiving
              the Feedback may use any Feedback that the other party voluntarily
              provides to improve the (i) Software Product or other related
              Paragon W2P LLC technologies, respectively for the benefit of
              Paragon W2P LLC; or (ii) your product or other related
              technologies, respectively for the benefit of you. Accordingly, if
              either party provides Feedback to the other party, both parties
              agree that the other party and its respective licensees may freely
              use, reproduce, license, distribute, and otherwise commercialize
              the Feedback in the (i) Software Product or other related
              technologies; or (ii) you products or other related technologies,
              respectively, without the payment of any royalties or fees.
            </p>
            <p className="py-2">
              8.3. Residual Rights. You agree that Paragon W2P LLC shall be free
              to use any general knowledge, skills and experience, (including,
              but not limited to, ideas, concepts, know-how, or techniques)
              (“Residuals”), contained in the (i) Feedback provided by you to
              Paragon W2P LLC; (ii) your products shared or disclosed to Paragon
              W2P LLC in connection with the Feedback; or (c) your confidential
              information voluntarily provided to Paragon W2P LLC in connection
              with the Feedback, which are retained in the memories of Paragon
              W2P LLC employees, agents, or contractors who have had access to
              such Residuals. Subject to the terms and conditions of this
              Agreement, Paragon W2P LLC employees, agents, or contractors shall
              not be prevented from using Residuals as part of such employee’s,
              agent’s or contractor’s general knowledge, skills, experience,
              talent, and/or expertise. Paragon W2P LLC shall not have any
              obligation to limit or restrict the assignment of such employees,
              agents or contractors or to pay royalties for any work resulting
              from the use of Residuals.
            </p>
            <p className=" py-2">
              8.4. DISCLAIMER OF WARRANTY. FEEDBACK FROM EITHER PARTY IS
              PROVIDED FOR THE OTHER PARTY’S USE “AS IS” AND BOTH PARTIES
              DISCLAIM ALL WARRANTIES, EXPRESS, IMPLIED AND STATUTORY INCLUDING,
              WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE, OR NONINFRINGEMENT. BOTH PARTIES
              DO NOT REPRESENT OR WARRANT THAT THE FEEDBACK WILL MEET THE OTHER
              PARTY’S REQUIREMENTS OR THAT THE OPERATION OR IMPLEMENTATION OF
              THE FEEDBACK WILL BE UNINTERRUPTED OR ERROR-FREE.
            </p>
            <p className=" py-2">
              Some states/jurisdictions do not allow exclusion of implied
              warranties or limitations on the duration of implied warranties,
              so the above disclaimer may not apply to you in its entirety.
            </p>
            <p className=" py-2">
              8.5. NO LIABILITY FOR CONSEQUENTIAL DAMAGES. TO THE MAXIMUM EXTENT
              PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL EITHER PARTY OR ITS
              SUPPLIERS BE LIABLE FOR ANY SPECIAL, INCIDENTAL, INDIRECT, OR
              CONSEQUENTIAL DAMAGES WHATSOEVER (INCLUDING, WITHOUT LIMITATION,
              DAMAGES FOR LOSS OF BUSINESS PROFITS, BUSINESS INTERRUPTION, LOSS
              OF BUSINESS INFORMATION, OR ANY OTHER PECUNIARY LOSS) ARISING OUT
              OF THE USE OF OR INABILITY TO USE THE FEEDBACK, EVEN IF THE OTHER
              PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p>
              Some states/jurisdictions do not allow the exclusion or limitation
              of incidental or consequential damages, so the above limitation or
              exclusion may not apply to you.
            </p>
            <h1 className=" py-4">
              SECTION 9: MISCELLANEOUS AND GENERAL PROVISIONS
            </h1>
            <p className=" py-2">
              9.1. Consent to Use of Data. You agree that Paragon W2P LLC and
              its affiliates or suppliers may collect and use technical
              information you provide in relation to support services related to
              the Software Product. Paragon W2P LLC and its suppliers agree not
              to use this information in a form that personally identifies you
              except to the extent necessary to provide such services.
            </p>
            <p className=" py-2">
              9.2. No Implied Licenses. Under no circumstances should anything
              in this Agreement be construed as Paragon W2P LLC granting by
              implication, estoppel or otherwise, (i) a license to any Paragon
              W2P LLC product or technology other than the Software Product; or
              (ii) any additional license rights for the Software Product other
              than the licenses expressly granted in this Agreement.
            </p>
            <p className=" py-2">
              9.3. U.S. Government Customers. Consistent with FAR 12.211 and
              12.212, Commercial Computer Software, Computer Software
              Documentation, and Technical Data for Commercial Items are
              licensed to the U.S. Government under Paragon W2P LLC’s standard
              commercial license.
            </p>
            <p className=" py-2">
              9.4. Compliance with Export Laws. You shall comply with all laws
              and regulations of the United States and other countries (“Export
              Laws”) to ensure that the Software Product is not (1) exported,
              directly or indirectly, in violation of Export Laws, or (2) used
              for any purpose prohibited by Export Laws, including, without
              limitation, nuclear, chemical, or biological weapons
              proliferation.
            </p>
            <p className=" py-2">
              9.5. Capacity and Authority to Contract. You represent that you
              are of the legal age of majority in your state, province
              jurisdiction of residence and, if applicable, you are duly
              authorized by your employer to enter into this contract.
            </p>
            <p className=" py-2">
              9.6. Applicable Law. This EULA is governed by the laws of the
              State of New Jersey, exclusive of conflict of law provisions and
              you consent to the jurisdiction of the courts of the State of New
              Jerseywith respect to any proceedings arising from this EULA.
            </p>
            <p>
              9.7. Entire Agreement. This EULA (including any addendum or
              amendment to this EULA which is included with SHIPLEAP™) is the
              entire agreement between you and Paragon W2P LLC relating to the
              Software Product, and it supersedes all prior or contemporaneous
              oral or written communications, proposals and representations with
              respect to the Software Product or any other subject matter
              covered by this EULA. To the extent the terms of any Paragon W2P
              LLC policies or programs for support services conflict with the
              terms of this EULA, the terms of this EULA shall control. In the
              event of a conflict between the English and any non­English
              versions of this EULA, the English version shall govern. If any
              provision of this EULA is held by a court of competent
              jurisdiction to be contrary to law, such provision will be changed
              and interpreted so as to best accomplish the objectives of the
              original provision to the fullest extent allowed by law and the
              remaining provision of the EULA will remain in force and effect.
            </p>
            <h1 className="py-4">
              ATTACHMENT “A” <br />
              REDISTRIBUTABLE SOFTWARE
            </h1>
            <p className=" py-4">
              In connection with Section 2.4. of this EULA, the following files
              may be redistributed with software applications developed and are
              licensed to you pursuant to the following terms and conditions:
            </p>
            <p>
              Your use of the following Free or Open Source Components is
              subject to the terms and conditions of MIT:
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
