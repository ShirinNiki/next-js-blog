function ContactInfo() {
  return (
    <div className="row px-3 pb-2">
      <div className="col-sm-4 text-center mb-3">
        <i className="fa fa-2x fa-map-marker-alt mb-3 text-primary"></i>
        <h4 className="font-weight-bold">Address</h4>
        <p>123 Street, New York, USA</p>
      </div>
      <div className="col-sm-4 text-center mb-3">
        <i className="fa fa-2x fa-phone-alt mb-3 text-primary"></i>
        <h4 className="font-weight-bold">Phone</h4>
        <p>+012 345 6789</p>
      </div>
      <div className="col-sm-4 text-center mb-3">
        <i className="far fa-2x fa-envelope mb-3 text-primary"></i>
        <h4 className="font-weight-bold">Email</h4>
        <p>info@example.com</p>
      </div>
    </div>
  );
}

export default ContactInfo;
