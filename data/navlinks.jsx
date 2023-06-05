import { GoNote } from 'react-icons/go'
import { IoIosBusiness } from 'react-icons/io'
import { GiUsaFlag } from 'react-icons/gi'
import { BiCopyright, BiParty } from 'react-icons/bi'
import { AiOutlineProfile, AiFillRocket } from 'react-icons/ai'
import { IoMdBusiness } from 'react-icons/io'
import { IoPersonAdd, IoPersonRemove } from 'react-icons/io5'
import {
    GiIndiaGate,
    GiOppositeHearts,
    GiAxeSword
} from 'react-icons/gi'
import {
    BsFileBinary,
    BsFillBalloonHeartFill,
    BsFillBalloonFill
} from 'react-icons/bs'
import {
    RiMoneyDollarCircleFill,
    RiShareLine,
    RiProfileLine,
    RiBuildingLine
} from 'react-icons/ri'
import {
    HiCash,
    HiUser,
    HiReceiptRefund,
    HiOutlineReceiptRefund,
    HiFire
} from 'react-icons/hi'
import {
    FaSignature,
    FaWpforms,
    FaStarOfLife,
    FaUserTie,
    FaSnowflake,
    FaBuilding
} from 'react-icons/fa'
import {
    MdBusiness,
    MdFoodBank,
    MdHandshake,
    MdAutorenew,
    MdPayments,
    MdImportExport,
    MdDesignServices,
    MdEventAvailable,
    MdOutlineChangeHistory
} from "react-icons/md"
import {
    TbNotes,
    TbNotebook,
    TbHeartHandshake,
    TbReceiptTax,
    TbTrademark,
    TbTopologyComplex,
    TbTopologyFullHierarchy,
    TbTopologyFull,
    TbTopologyRing,
    TbTopologyStar2,
    TbTopologyStar3,
    TbTopologyStarRing2,
    TbTopologyStarRing3,
    TbTopologyStarRing,
    TbTopologyStar
} from 'react-icons/tb'

export const navlink = [
    {
        title: "Startups",
        href: "/startups",
        sublinks: [
            { name: "Partnership", href: "/partnership", icon: MdHandshake },
            { name: "Proprietorship", href: "/proprietorship", icon: TbHeartHandshake },
            { name: "One Person Company", href: "/one-person-company", icon: FaUserTie },
            { name: "Limited Liability Partnership", href: "/limited-liability-partnership", icon: HiCash },
            { name: "Private Limited Company", href: "/private-limited-company", icon: RiBuildingLine },
            { name: "Startup India Registration", href: "/startup-india-registration", icon: AiFillRocket },
            { name: "Indian Subsidiary", href: "/indian-subsidiary", icon: IoIosBusiness },
            { name: "Nidhi Company", href: "/nidhi-company", icon: GiIndiaGate },
            { name: "Section 8 Company", href: "/section8-company", icon: MdBusiness },
            { name: "USA Company Registration", href: "/usa-company-registration", icon: GiUsaFlag },
            { name: "Digital Signature", href: "/digital-signature", icon: FaSignature },
            { name: "Udyam Registration", href: "/udyam-registration", icon: TbNotebook },
            { name: "Import Export Code", href: "/import-export-code", icon: MdImportExport },
            { name: "FSSAI Registration", href: "/fssai-registration", icon: MdFoodBank },
            { name: "Professional Tax", href: "/professional-tax", icon: RiProfileLine },
            { name: "Check Company or LLP Name Availability", href: "/check-company-or-llp-name-availability", icon: MdEventAvailable },
        ]
    },
    {
        title: "Income Tax",
        href: "/income-tax",
        sublinks: [
            { name: "Personal Tax Filing", href: "/personal-tax-filing", icon: TbReceiptTax },
            { name: "Business Tax Filing", href: "/business-tax-filing", icon: IoMdBusiness },
            { name: "Tax Notice", href: "/tax-notice", icon: GoNote },
            { name: "TDS Filing", href: "/tds-filing", icon: BsFileBinary },
            { name: "ITR-1 Return", href: "/itr-1-return", icon: AiOutlineProfile },
            { name: "ITR-2 Return", href: "/itr-2-return", icon: AiOutlineProfile },
            { name: "ITR-3 Return", href: "/itr-3-return", icon: AiOutlineProfile },
            { name: "ITR-4 Return", href: "/itr-4-return", icon: AiOutlineProfile },
            { name: "ITR-5 Return", href: "/itr-5-return", icon: AiOutlineProfile },
            { name: "ITR-6 Return", href: "/itr-6-return", icon: AiOutlineProfile },
            { name: "ITR-7 Return", href: "/itr-7-return", icon: AiOutlineProfile },
            { name: "Form 16", href: "/form-16", icon: FaWpforms },
        ]
    },
    {
        title: "Goods & Service Tax",
        href: "/gst",
        sublinks: [
            { name: "GST Registration", href: "/gst-registration", icon: TbTopologyStar },
            { name: "GST Return Filing", href: "/gst-return-filing", icon: TbTopologyComplex },
            { name: "GST LUT Filing", href: "/gst-lut-filing", icon: TbTopologyFullHierarchy },
            { name: "GST Registration Cancellation", href: "/gst-registration-cancellation", icon: TbTopologyFull },
            { name: "GST Annual Return", href: "/gst-annual-return", icon: TbTopologyStarRing3 },
            { name: "GST Invoicing", href: "/gst-invoicing", icon: TbTopologyStarRing },
            { name: "GST eInvoicing", href: "/gst-einvoicing", icon: TbTopologyRing },
            { name: "eWay Bill", href: "/eway-bill", icon: TbTopologyStar2 },
            { name: "Input Tax Credit", href: "/input-tax-credit", icon: TbTopologyStar3 },
            { name: "GST Software for Accountants", href: "/gst-software-for-accountants", icon: TbTopologyStarRing2 }
        ]
    },
    {
        title: "Trademark",
        href: "/trademark",
        sublinks: [
            { name: "Trademark Registration", href: "/trademark-registration", icon: TbTrademark },
            { name: "Trademark Objection", href: "/trademark-objection", icon: GiAxeSword },
            { name: "Trademark Opposition", href: "/trademark-opposition", icon: GiOppositeHearts },
            { name: "Trademark Renewal", href: "/trademark-renewal", icon: MdAutorenew },
            { name: "Copyright Registration", href: "/copyright-registration", icon: BiCopyright },
            { name: "Design Registration", href: "/design-registration", icon: MdDesignServices },
            { name: "Provisional Patent", href: "/provisional-patent", icon: FaSnowflake },
            { name: "Patent Registration", href: "/patent-registration", icon: HiUser },
            { name: "Find trademark class for over 8000 goods and services", href: "/trademark-class-finder", icon: FaStarOfLife },
        ]
    },
    {
        title: "Compliance",
        href: "/mcs-services",
        sublinks: [
            { name: "Proprietorship", href: "/proprietorship", icon: TbHeartHandshake },
            { name: "Partnership", href: "/partnership", icon: MdHandshake },
            { name: "Company", href: "/company", icon: FaBuilding },
            { name: "LLP Compliance", href: "/llp-compliance", icon: HiFire },
            { name: "Payroll", href: "/payroll", icon: MdPayments },
            { name: "PF Registration", href: "/pf-registration", icon: TbNotes },
            { name: "PF Return Filing", href: "/pf-return-filing", icon: HiOutlineReceiptRefund },
            { name: "ESI Registration", href: "/esi-registration", icon: BiParty },
            { name: "Add Directors", href: "/add-directors", icon: IoPersonAdd },
            { name: "Remove Directors", href: "/remove-directors", icon: IoPersonRemove },
            { name: "Share Transfer", href: "/share-transfer", icon: RiShareLine },
            { name: "DIR-3 KYC", href: "/dir-3-kyc", icon: HiReceiptRefund },
            { name: "Registered Office Change", href: "/registered-office-change", icon: MdOutlineChangeHistory },
            { name: "Increase Authorized Capital", href: "/increase-authorized-capital", icon: RiMoneyDollarCircleFill },
            { name: "Winding Up of Company", href: "/winding-up-of-company", icon: BsFillBalloonFill },
            { name: "Winding Up of LLP", href: "/winding-up-of-llp", icon: BsFillBalloonHeartFill },
        ]
    },
    {
        title: "Import Export",
        href: "/services/import-export"
    },
]