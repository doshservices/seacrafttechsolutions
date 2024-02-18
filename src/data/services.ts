import marineIcon from "../assets/Icons/marineIcon.svg"
import remoteVehicleIcon from "../assets/Icons/remote-vehicle.svg"
import subseaTool from "../assets/Icons/subsea-tooling.svg"
import autoVehicle from "../assets/Icons/unmanned.svg"
import facilityMaintenanceIcon from "../assets/Icons/maintainance.svg"
import pipePiggingIcon from "../assets/Icons/inspection.svg"
import corrosionIcon from "../assets/Icons/corrosion.svg"
import dredgingIcon from "../assets/Icons/hydraulic.svg"

export const services = [
    {
        name: "Marine Operations",
        icon: marineIcon,
        briefDescription: "With a dedicated focus on excellence, our team orchestrates seamless maritime endeavors, ensuring smooth sailing for clients across diverse projects.",
        url: "/services/marine-operations",
    },
    {
        name: "Remotely Operated Vehicle",
        icon: remoteVehicleIcon,
        briefDescription: "Our expertise in Remotely Operated Vehicle (work class and observation) operations redefines the boundaries of subsea exploration and intervention.",
        url: "/services/remotely-operated-vehicle",
    },
    {
        name: "Customized subsea tooling",
        icon: subseaTool,
        briefDescription: "Our team of experts combines innovation and precision engineering to design specialized tools that optimize efficiency in underwater operations.",
        url: "/services/customized-subsea-tooling",
    },
    {
        name: "Autonomous Unmanned Vehicle",
        icon: autoVehicle,
        briefDescription: "Engineered with state-of-the-art technology, our Autonomous Unmanned Vehicle navigate the depths with unparalleled precision and efficiency.",
        url: "/services/autonomous-unmanned-vehicle",
    },
    {
        name: "Facility Maintenance",
        icon: facilityMaintenanceIcon,
        briefDescription: "Our dedicated team ensures the smooth operation and upkeep of offshore facilities through proactive maintenance strategies and support services.",
        url: "/services/facility-maintenance",
    },
    {
        name: "Pipeline Pigging & Inspection",
        icon: pipePiggingIcon,
        briefDescription: "Utilizing advanced pigging technology and state-of-the-art inspection methods, our expert team conducts thorough assessments to detect potential issues.",
        url: "/services/pipeline-pigging-inspection",
    },
    {
        name: "Corrosion Prevention & Control Services",
        icon: corrosionIcon,
        briefDescription: "Corrosion Prevention & Control Services are paramount at Seacraft, where we employ cutting-edge techniques to safeguard offshore assets.",
        url: "/services/corrosion-prevention-control-services",
    },
    {
        name: "Dredging, Hydraulic Water Channel Maintenance",
        icon: dredgingIcon,
        briefDescription: "Through proactive maintenance, we uphold waterway efficiency and safety, supporting sustainable marine operations and environmental preservation.",
        url: "/services/dredging-hydraulic-water-channel-maintenance",
    },
]