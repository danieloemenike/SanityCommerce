import { FcHome, FcMms, FcComboChart, FcCustomerSupport, FcFilledFilter, FcShipped, FcPaid, FcIdea, FcCloth, FcSettings,FcShop,FcAdvertising,FcCollaboration,FcAssistant,FcDoughnutChart} from "react-icons/fc";



export const storeRoutes = [
    {
        id: "1",
        title: 'All',
        path: '/search',
       
        icon: FcHome,
        color: "#292929"
    },
    {
        id: "2",
        title: 'Men',
        path: 'men',
       
        icon: FcMms,
        color: "#292929"
    },
    {
        id: "3",
        title: 'Women',
        path: '/women',
       
        icon: FcFilledFilter,
        color: "#292929"
    },
    {
        id: "4",
        title: 'Teens',
        path: 'teens',
        icon: FcDoughnutChart,
        color: "#292929"
    },
    // {
    //     id: "5",
    //     title: 'Sizes',
    //     path: 'sizes',
      
    //     icon: FcCloth,
    //     color: "#292929"
    //  },
  
    //   {
    //     id: "6",
    //     title: 'Products',
    //     path: 'products',
      
    //     icon: FcPaid,
    //     color: "#292929"
    // },
    // {
    //     id: "7",
    //     title: 'Delivery',
    //     path: 'delivery',
    //     icon: FcShipped,
    //     color: "#292929"
    // },
    // {
    //     id: "8",
    //     title: 'Support',
    //     path: 'support',
    //     icon: FcCustomerSupport,
    //     color: "#292929"
    // },

]
