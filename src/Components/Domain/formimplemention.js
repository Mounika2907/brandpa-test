import React, { Component } from "react";
// import "../../css/formimplementation.css"

export default class Formimplementation extends Component {
  render() {
    return (
        <div className="gray-panel">
        <div className="scroll-to" id="contact" />
        <div className="contact-panel single-panel container">
          <h2 style ={{ marginTop: "62px", textAlign: "center",fontSize: "31px", padding: "20px 0", fontWeight: "500",color: "inherit",}}>Make an offer for goldomo.com</h2>
          <div className="contact-form">
            <div>
              <form className="contact" id="contact-form" action="/send" method="POST" style ={{fontSize: "20px",maxWidth: "100%",color: "inherit",fontWeight: "700",marginBottom: "15px"}}>
                <input name="fromUrl" className="form-control" id="formUrl" type="hidden" defaultValue="/names/goldomo" />
                <input name="word" className="form-control" id="word" type="hidden" defaultValue="goldomo" />
                <input name="domain" className="form-control" id="domain" type="hidden" defaultValue="goldomo.com" />
                <input name="listPrice" className="form-control" id="listPrice" type="hidden" defaultValue={2395} />
                <input name="contactType" className="form-control" id="contactType" type="hidden" defaultValue="offer" />
                <div className="form-group make-offer-content">
                  <label htmlFor="offer">Your offer</label>
                  <div className="input-group">
                    <div className="input-group-addon">$</div>
                    <input name="offer" className="form-control" id="offer" style={{maxWidth: 150,padding: "16px"}} required type="number" defaultValue />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Your name</label>
                  <input name="name" className="form-control" id="name" required type="text" placeholder defaultValue  style ={{padding:"16px"}}/>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your email</label>
                  <input name="email" className="form-control" id="email" required type="email" placeholder defaultValue style ={{padding:"16px"}} />
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-sm-4">
                      <label htmlFor="country">Country</label>
                      <select name="country" title="Country" className="form-control" id="country" style ={{padding:"16px"}}>
                        <option disabled value />
                        <option id="US" value="United States">United States</option>
                        <option id="GB" value="United Kingdom">United Kingdom</option>
                        <option id="AF" value="Afghanistan">Afghanistan</option>
                        <option id="AL" value="Albania">Albania</option>
                        <option id="DZ" value="Algeria">Algeria</option>
                        <option id="AS" value="American Samoa">American Samoa</option>
                        <option id="AD" value="Andorra">Andorra</option>
                        <option id="AO" value="Angola">Angola</option>
                        <option id="AI" value="Anguilla">Anguilla</option>
                        <option id="AG" value="Antigua and Barbuda">Antigua and Barbuda</option>
                        <option id="AR" value="Argentina">Argentina</option>
                        <option id="AM" value="Armenia">Armenia</option>
                        <option id="AW" value="Aruba">Aruba</option>
                        <option id="AU" value="Australia">Australia</option>
                        <option id="AT" value="Austria">Austria</option>
                        <option id="AZ" value="Azerbaijan">Azerbaijan</option>
                        <option id="BS" value="Bahamas">Bahamas</option>
                        <option id="BH" value="Bahrain">Bahrain</option>
                        <option id="BD" value="Bangladesh">Bangladesh</option>
                        <option id="BB" value="Barbados">Barbados</option>
                        <option id="BY" value="Belarus">Belarus</option>
                        <option id="BE" value="Belgium">Belgium</option>
                        <option id="BZ" value="Belize">Belize</option>
                        <option id="BJ" value="Benin">Benin</option>
                        <option id="BM" value="Bermuda">Bermuda</option>
                        <option id="BT" value="Bhutan">Bhutan</option>
                        <option id="BO" value="Bolivia">Bolivia</option>
                        <option id="BQ" value="Bonaire">Bonaire</option>
                        <option id="BA" value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                        <option id="BW" value="Botswana">Botswana</option>
                        <option id="BV" value="Bouvet Island">Bouvet Island</option>
                        <option id="BR" value="Brazil">Brazil</option>
                        <option id="IO" value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                        <option id="VG" value="British Virgin Islands">British Virgin Islands</option>
                        <option id="BN" value="Brunei Darussalam">Brunei Darussalam</option>
                        <option id="BG" value="Bulgaria">Bulgaria</option>
                        <option id="BF" value="Burkina Faso">Burkina Faso</option>
                        <option id="KH" value="Cambodia">Cambodia</option>
                        <option id="CM" value="Cameroon">Cameroon</option>
                        <option id="CA" value="Canada">Canada</option>
                        <option id="CV" value="Cape Verde">Cape Verde</option>
                        <option id="KY" value="Cayman Islands">Cayman Islands</option>
                        <option id="CL" value="Chile">Chile</option>
                        <option id="CN" value="China">China</option>
                        <option id="CX" value="Christmas Island">Christmas Island</option>
                        <option id="CC" value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                        <option id="CO" value="Colombia">Colombia</option>
                        <option id="KM" value="Comoros">Comoros</option>
                        <option id="CK" value="Cook Islands">Cook Islands</option>
                        <option id="CR" value="Costa Rica">Costa Rica</option>
                        <option id="HR" value="Croatia">Croatia</option>
                        <option id="CU" value="Cuba">Cuba</option>
                        <option id="CW" value="Curaçao">Curaçao</option>
                        <option id="CY" value="Cyprus">Cyprus</option>
                        <option id="CZ" value="Czech Republic">Czech Republic</option>
                        <option id="CI" value="Côte d'Ivoire">Côte d'Ivoire</option>
                        <option id="DK" value="Denmark">Denmark</option>
                        <option id="DJ" value="Djibouti">Djibouti</option>
                        <option id="DM" value="Dominica">Dominica</option>
                        <option id="DO" value="Dominican Republic">Dominican Republic</option>
                        <option id="EC" value="Ecuador">Ecuador</option>
                        <option id="EG" value="Egypt">Egypt</option>
                        <option id="SV" value="El Salvador">El Salvador</option>
                        <option id="GQ" value="Equatorial Guinea">Equatorial Guinea</option>
                        <option id="EE" value="Estonia">Estonia</option>
                        <option id="ET" value="Ethiopia">Ethiopia</option>
                        <option id="FK" value="Falkland Islands">Falkland Islands</option>
                        <option id="FO" value="Faroe Islands">Faroe Islands</option>
                        <option id="FJ" value="Fiji">Fiji</option>
                        <option id="FI" value="Finland">Finland</option>
                        <option id="FR" value="France">France</option>
                        <option id="GF" value="French Guiana">French Guiana</option>
                        <option id="PF" value="French Polynesia">French Polynesia</option>
                        <option id="TF" value="French Southern Territories">French Southern Territories</option>
                        <option id="GA" value="Gabon">Gabon</option>
                        <option id="GM" value="Gambia">Gambia</option>
                        <option id="GE" value="Georgia">Georgia</option>
                        <option id="DE" value="Germany">Germany</option>
                        <option id="GH" value="Ghana">Ghana</option>
                        <option id="GI" value="Gibraltar">Gibraltar</option>
                        <option id="GR" value="Greece">Greece</option>
                        <option id="GL" value="Greenland">Greenland</option>
                        <option id="GD" value="Grenada">Grenada</option>
                        <option id="GP" value="Guadeloupe">Guadeloupe</option>
                        <option id="GT" value="Guatemala">Guatemala</option>
                        <option id="GG" value="Guernsey">Guernsey</option>
                        <option id="GN" value="Guinea">Guinea</option>
                        <option id="GW" value="Guinea-Bissau">Guinea-Bissau</option>
                        <option id="GY" value="Guyana">Guyana</option>
                        <option id="HT" value="Haiti">Haiti</option>
                        <option id="HN" value="Honduras">Honduras</option>
                        <option id="HK" value="Hong Kong">Hong Kong</option>
                        <option id="HU" value="Hungary">Hungary</option>
                        <option id="IS" value="Iceland">Iceland</option>
                        <option id="IN" value="India">India</option>
                        <option id="ID" value="Indonesia">Indonesia</option>
                        <option id="IE" value="Ireland">Ireland</option>
                        <option id="IQ" value="Iraq">Iraq</option>
                        <option id="IM" value="Isle of Man">Isle of Man</option>
                        <option id="IL" value="Israel">Israel</option>
                        <option id="IT" value="Italy">Italy</option>
                        <option id="JM" value="Jamaica">Jamaica</option>
                        <option id="JP" value="Japan">Japan</option>
                        <option id="JE" value="Jersey">Jersey</option>
                        <option id="JO" value="Jordan">Jordan</option>
                        <option id="KZ" value="Kazakhstan">Kazakhstan</option>
                        <option id="KE" value="Kenya">Kenya</option>
                        <option id="KI" value="Kiribati">Kiribati</option>
                        <option id="KW" value="Kuwait">Kuwait</option>
                        <option id="KG" value="Kyrgyzstan">Kyrgyzstan</option>
                        <option id="LA" value="Laos">Laos</option>
                        <option id="LV" value="Latvia">Latvia</option>
                        <option id="LB" value="Lebanon">Lebanon</option>
                        <option id="LS" value="Lesotho">Lesotho</option>
                        <option id="LR" value="Liberia">Liberia</option>
                        <option id="LI" value="Liechtenstein">Liechtenstein</option>
                        <option id="LT" value="Lithuania">Lithuania</option>
                        <option id="LU" value="Luxembourg">Luxembourg</option>
                        <option id="MO" value="Macao">Macao</option>
                        <option id="MK" value="Macedonia, Former Yugoslav Republic of">Macedonia, Former Yugoslav Republic of</option>
                        <option id="MG" value="Madagascar">Madagascar</option>
                        <option id="MW" value="Malawi">Malawi</option>
                        <option id="MY" value="Malaysia">Malaysia</option>
                        <option id="MV" value="Maldives">Maldives</option>
                        <option id="ML" value="Mali">Mali</option>
                        <option id="MT" value="Malta">Malta</option>
                        <option id="MH" value="Marshall Islands">Marshall Islands</option>
                        <option id="MQ" value="Martinique">Martinique</option>
                        <option id="MR" value="Mauritania">Mauritania</option>
                        <option id="MU" value="Mauritius">Mauritius</option>
                        <option id="YT" value="Mayotte">Mayotte</option>
                        <option id="MX" value="Mexico">Mexico</option>
                        <option id="FM" value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                        <option id="MD" value="Moldova">Moldova</option>
                        <option id="MC" value="Monaco">Monaco</option>
                        <option id="MN" value="Mongolia">Mongolia</option>
                        <option id="ME" value="Montenegro">Montenegro</option>
                        <option id="MS" value="Montserrat">Montserrat</option>
                        <option id="MA" value="Morocco">Morocco</option>
                        <option id="MZ" value="Mozambique">Mozambique</option>
                        <option id="MM" value="Myanmar">Myanmar</option>
                        <option id="NA" value="Namibia">Namibia</option>
                        <option id="NR" value="Nauru">Nauru</option>
                        <option id="NP" value="Nepal">Nepal</option>
                        <option id="NL" value="Netherlands">Netherlands</option>
                        <option id="NC" value="New Caledonia">New Caledonia</option>
                        <option id="NZ" value="New Zealand">New Zealand</option>
                        <option id="NI" value="Nicaragua">Nicaragua</option>
                        <option id="NE" value="Niger">Niger</option>
                        <option id="NG" value="Nigeria">Nigeria</option>
                        <option id="NU" value="Niue">Niue</option>
                        <option id="NF" value="Norfolk Island">Norfolk Island</option>
                        <option id="NO" value="Norway">Norway</option>
                        <option id="OM" value="Oman">Oman</option>
                        <option id="PK" value="Pakistan">Pakistan</option>
                        <option id="PW" value="Palau">Palau</option>
                        <option id="PS" value="Palestine">Palestine</option>
                        <option id="PA" value="Panama">Panama</option>
                        <option id="PG" value="Papua New Guinea">Papua New Guinea</option>
                        <option id="PY" value="Paraguay">Paraguay</option>
                        <option id="PE" value="Peru">Peru</option>
                        <option id="PH" value="Philippines">Philippines</option>
                        <option id="PN" value="Pitcairn Islands">Pitcairn Islands</option>
                        <option id="PL" value="Poland">Poland</option>
                        <option id="PT" value="Portugal">Portugal</option>
                        <option id="PR" value="Puerto Rico">Puerto Rico</option>
                        <option id="QA" value="Qatar">Qatar</option>
                        <option id="RO" value="Romania">Romania</option>
                        <option id="RU" value="Russia">Russia</option>
                        <option id="RW" value="Rwanda">Rwanda</option>
                        <option id="RE" value="Réunion">Réunion</option>
                        <option id="BL" value="Saint Barthélemy">Saint Barthélemy</option>
                        <option id="SH" value="Saint Helena">Saint Helena</option>
                        <option id="KN" value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                        <option id="LC" value="Saint Lucia">Saint Lucia</option>
                        <option id="MF" value="Saint Martin (French part)">Saint Martin (French part)</option>
                        <option id="PM" value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                        <option id="VC" value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                        <option id="WS" value="Samoa">Samoa</option>
                        <option id="SM" value="San Marino">San Marino</option>
                        <option id="ST" value="Sao Tome and Principe">Sao Tome and Principe</option>
                        <option id="SA" value="Saudi Arabia">Saudi Arabia</option>
                        <option id="SN" value="Senegal">Senegal</option>
                        <option id="RS" value="Serbia">Serbia</option>
                        <option id="SC" value="Seychelles">Seychelles</option>
                        <option id="SL" value="Sierra Leone">Sierra Leone</option>
                        <option id="SG" value="Singapore">Singapore</option>
                        <option id="SX" value="Sint Maarten (Dutch part)">Sint Maarten (Dutch part)</option>
                        <option id="SK" value="Slovakia">Slovakia</option>
                        <option id="SI" value="Slovenia">Slovenia</option>
                        <option id="SB" value="Solomon Islands">Solomon Islands</option>
                        <option id="ZA" value="South Africa">South Africa</option>
                        <option id="GS" value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
                        <option id="KR" value="South Korea">South Korea</option>
                        <option id="ES" value="Spain">Spain</option>
                        <option id="LK" value="Sri Lanka">Sri Lanka</option>
                        <option id="SR" value="Suriname">Suriname</option>
                        <option id="SZ" value="Swaziland">Swaziland</option>
                        <option id="SE" value="Sweden">Sweden</option>
                        <option id="CH" value="Switzerland">Switzerland</option>
                        <option id="SY" value="Syria">Syria</option>
                        <option id="TW" value="Taiwan">Taiwan</option>
                        <option id="TJ" value="Tajikistan">Tajikistan</option>
                        <option id="TZ" value="Tanzania">Tanzania</option>
                        <option id="TH" value="Thailand">Thailand</option>
                        <option id="TL" value="Timor-Leste">Timor-Leste</option>
                        <option id="TG" value="Togo">Togo</option>
                        <option id="TK" value="Tokelau">Tokelau</option>
                        <option id="TO" value="Tonga">Tonga</option>
                        <option id="TT" value="Trinidad and Tobago">Trinidad and Tobago</option>
                        <option id="TN" value="Tunisia">Tunisia</option>
                        <option id="TR" value="Turkey">Turkey</option>
                        <option id="TM" value="Turkmenistan">Turkmenistan</option>
                        <option id="TC" value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                        <option id="TV" value="Tuvalu">Tuvalu</option>
                        <option id="UG" value="Uganda">Uganda</option>
                        <option id="UA" value="Ukraine">Ukraine</option>
                        <option id="AE" value="United Arab Emirates">United Arab Emirates</option>
                        <option id="UY" value="Uruguay">Uruguay</option>
                        <option id="UZ" value="Uzbekistan">Uzbekistan</option>
                        <option id="VU" value="Vanuatu">Vanuatu</option>
                        <option id="VA" value="Vatican City">Vatican City</option>
                        <option id="VE" value="Venezuela">Venezuela</option>
                        <option id="VN" value="Vietnam">Vietnam</option>
                        <option id="WF" value="Wallis and Futuna">Wallis and Futuna</option>
                        <option id="EH" value="Western Sahara">Western Sahara</option>
                        <option id="YE" value="Yemen">Yemen</option>
                        <option id="ZM" value="Zambia">Zambia</option>
                        <option id="ZW" value="Zimbabwe">Zimbabwe</option>
                        <option id="AX" value="Åland Islands">Åland Islands</option>
                      </select>
                    </div>
                    <div className="col-sm-8">
                      <label htmlFor="phone">Phone number</label>
                      <input name="phone" className="form-control" id="phone" required type="tel" placeholder defaultValue style ={{padding:"16px"}} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <p style ={{textAlign:"center"}}>
                      Your details will only be used to reply to your request.
                      See our <a href="/privacy-policy" target="_blank">privacy policy</a>.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12" style ={{marginLeft:"130px"}}>
                    <div style ={{marginLeft:"138px"}}><div className="grecaptcha-badge" style={{ marginLeft:"138px", borderRadius: 2, transition: 'right 0.3s', width: 256, height: 60, right: '-186px', bottom: 14, overflow: 'hidden', display: 'block', position: 'fixed', boxShadow: '0px 0px 5px gray'}} data-style="bottomright"><div className="grecaptcha-logo"><iframe name="a-7ukuiu40wlmw" width={256} height={60} title="reCAPTCHA" role="presentation" src="https://www.google.com/recaptcha/api2/anchor?ar=2&k=6LdRa7YZAAAAAAYL-MgHCG3iYLVbBLzmoKd2n-1E&co=aHR0cHM6Ly9icmFuZHBhLmNvbTo0NDM.&hl=en&v=FDTCuNjXhn1sV0lk31aK53uB&size=invisible&sa=offer&cb=mradkj8q1ugb" frameBorder={0} scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation" /></div><div className="grecaptcha-error" /><textarea name="g-recaptcha-response" className="g-recaptcha-response" id="g-recaptcha-response" style={{margin: '10px 25px', padding: 0, border: '1px solid rgb(193, 193, 193)', borderImage: 'none', width: 250, height: 40, display: 'none'}} defaultValue={""} /></div><iframe style={{display: 'none'}} /></div><button className="g-recaptcha btn btn-primary btn-lg" id="send-message-button" data-action="offer" data-callback="onSubmit" data-sitekey="6LdRa7YZAAAAAAYL-MgHCG3iYLVbBLzmoKd2n-1E">
                      Make offer
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}
