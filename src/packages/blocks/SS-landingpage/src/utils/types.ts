import { ImageSourcePropType } from "react-native";

export interface IBannerItem {
  image: string;
  description: string;
  buttonText: string;
}

export interface IHowItWorksItem {
  title: string;
  description: string;
}

export interface IGalleryItem {
  url: string;
}

export interface ITestimonialItem {
  id: number,
  type: 'customer_feedback',
  attributes: {
      id: 12,
      description: string,
      customer_name: string,
      position: number,
      is_active: boolean,
      image: string
  }


}

export type SettingsType = {
  id: number;
  type: string;
  attributes: {
    location_url: string;
    city: string;
    state: string;
    country: string;
    pin_code: number;
    address_line1: string;
    address_line2: string;
    image: {
      id: number;
      url: string;
    };
    opening_hours: {
      id: number;
      start_time: Date;
      end_time: Date;
      week_day: string;
    }[];
  };
};

export type BrandInformationType = {
  id: number;
  type: string;
  attributes: {
    id: number;
    name: string;
    testimonial: boolean;
    header: {
      id: number;
      store_name: string;
      image: {
        url: string;
        id: number;
      };
    };
    footer: {
      id: number;
      copy_right_text: string;
      phone_number: number;
      country_code: string;
      social_media: {
        facebook: {
          selected: boolean;
          url: string;
        };
        twitter: {
          selected: boolean;
          url: string;
        };
        instagram: {
          selected: boolean;
          url: string;
        };
        youtube: {
          selected: boolean;
          url: string;
        };
      };
      download_apps: {
        android: {
          selected: boolean;
          url: string;
        };
        ios: {
          selected: boolean;
          url: string;
        };
      };
    };
    banners: {
      id: number;
      redirect_url: string;
      image: {
        url: string;
        id: number;
      };
    }[];
  };
};
