// Customizable Area Start
export type PaymentOption = "payNow" | "payAtLocation";

export type SelectablePaymentOption = { label: string; value: PaymentOption };

export type PersonalDetailsType = {
  name: string;
  email: string;
  phone: string;
  comment: string;
};

export type PaymentDetailsType = {
  country: string;
  no: string;

  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zip: string;
};

export type AppointmentType = {
  time_slot_id: string | number;
  catalogue_id: string;
  payment_mode: "pay_now" | "pay_later";
  appointment_date: string;
  personal_detail_attributes: {
    full_name: string;
    full_phone_number: number | string;
    email: string;
    comment: string;
  };
  billing_address_attributes: {
    country: string;
    city: string;
    state: string;
    flat_number: string;
    address_line_2: string;
    address_line_1: string;
    zip_code: string;
  };
};

export type AppointmentApiType = {
  order_id: string;
  amount: string;
  currency: string;
  redirect_url: string;
  cancel_url: string;
  language: string;
  billing_name: string;
  billing_address: string;
  billing_city: string;
  billing_state: string;
  billing_zip: string;
  billing_country: string;
  billing_tel: string;
  billing_email: string;
  delivery_name: string;
  delivery_address: string;
  delivery_city: string;
  delivery_state: string;
  delivery_zip: string;
  delivery_country: string;
  delivery_tel: string;
  customer_identifier: string;
  promo_code: string;
  integration_type: "iframe_normal";
};
// Customizable Area End
