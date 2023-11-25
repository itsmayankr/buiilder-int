// Customizable Area Start
import { PersonalDetailsType } from "../../appointmentmanagement/src/types";
import { catalogueItemDetails } from "../../catalogue/src/utils/types";

export type RootStackParamList = {
  Gallery: undefined;
  HomePageScreen: undefined;
  Catalogue: {
    searchParam?: string;
    filter?: number[];
    refresh?: boolean;
  };
  BookAppointment: {
    id: string;
    title: string;
    price: number;
    duration: number;
    image: string;  
    currentDate:Date;
    paymentType: catalogueItemDetails["attributes"]["payment_preferences"];
    paymentMethod: catalogueItemDetails["attributes"]["payment_method"];
    refresh?: boolean;
    currency: catalogueItemDetails["attributes"]["currency"];
    
    
  };
  BookAppointmentPersonal: {
    id: string;
    selectedTime: any;
    title: string;
    price: number;
    image: string;
    currentDate:Date;
    duration: number;
    paymentType: catalogueItemDetails["attributes"]["payment_preferences"];
    paymentMethod: catalogueItemDetails["attributes"]["payment_method"];
    timeZone?: string;
    currency: catalogueItemDetails["attributes"]["currency"];


  };
  BookAppointmentPayment: {
    id: string;
    selectedTime: any;
    title: string;
    currentDate:Date;
    price: number;
    duration: number;
    image: string;
    personalDetails: PersonalDetailsType;
    paymentType: catalogueItemDetails["attributes"]["payment_preferences"];
    paymentMethod: catalogueItemDetails["attributes"]["payment_method"];
    timeZone?: string;
    currency: catalogueItemDetails["attributes"]["currency"];

  };
  BookAppointmentDetails: {
    id: string;
    title: string;
    duration: number;
    price: number;
    paymentMethod: catalogueItemDetails["attributes"]["payment_method"];
    selectedTime: { date: string; time: string; id: number };
    personalDetails: PersonalDetailsType;
    image: string;
    orderID: string;
    orderDate: string;
    success: boolean;
    currentDate:Date;
    paymentType: catalogueItemDetails["attributes"]["payment_preferences"];
    timeZone?: string;
    currency: catalogueItemDetails["attributes"]["currency"];

  };
  Contactus: undefined;
  CatalogueDetail: {
    id: string;
    pageTitle: string;
  };
  FilterItems: { onApplyFilter: (filters: []) => void };
  MobileAccountLoginBlock: undefined;
  Search: undefined;
  Splashscreen: undefined;
  More: undefined;
};
// Customizable Area End