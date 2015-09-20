require('../../../less/modules/forms.less');
require('../../../less/components/join-us/_join_us_form.less');

var React = require('react');
var Formsy = require('formsy-react');

var TextInput = require('../shared/forms/TextInput.js.jsx');
var SelectInput = require('../shared/forms/SelectInput.js.jsx');
var MultiSelectInput = require('../shared/forms/MultiSelectInput.js.jsx');

var destinationOptions = [
  'Hawthorne (HHR)',
  'Burbank (BUR)',
  'San Carlos (SQL)',
  'Oakland (OAK)',
  'Santa Barbara (SBA)',
  'Carlsbad (CRQ)',
  'Monterey (MRY)',
  'Monterey (MRY)',
  'Truckee (TRK)',
  'Napa (APC)',
  'Palm Springs (UDD)',
  'Las Vegas (LAS)',
  'San Diego (SAN)',
  'Santa Ana / Orange County (SNA) — planned',
  'San Jose (SJC) — planned',
  'Mammoth Lakes (MMH) — planned',
  'San Luis Obispo (SBP) — planned',
  'Fresno (FAT) — planned',
  'Bakersfield (BFL) — planned',
  'Scottsdale (SDL) — planned',
  'Other'
];

var homeAirportOptions = [
  'SF Bay / San Carlos (SQL)',
  'Los Angeles / Hawthorne (HHR)',
  'Los Angeles / Burbank (BUR)',
  'Santa Barbara (SBA)',
  'Truckee / Tahoe (TRK)',
  'SF Bay / Oakland (OAK)',
  'Carlsbad (CRQ)',
  'Las Vegas, NV (LAS)',
  'Napa (APC)',
  'Monterey (MRY)',
  'Sacramento (MCC)',
  'Palm Springs (UDD)'
]

var travelPrefsOptions = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

var JoinUsForm = React.createClass({
  onSubmit: function(model) {
    console.log('model', model)
  },
  enableButton: function() {
    this.setState({ canSubmit: true })
  },
  disableButton: function() {
    this.setState({ canSubmit: false })
  },
  getInitialState: function() {
    return {
      canSubmit: false
    };
  },
  render: function() {
    return (
      <div className='join-us-form-wrapper'>
        <Formsy.Form onValidSubmit={this.onSubmit} onValid={this.enableButton} onInvalid={this.disableButton}>

          <TextInput name='name' label='Full Name' placeHolder='Full Name' required/>
          <TextInput name='email' type='email' validations="isEmail" label='Your Email' placeHolder='Your Email' required/>
          <TextInput name='phone' type='phone' label='Your Phone' placeHolder='Your Phone' required/>

          <TextInput name='city' label='City' placeHolder='City' required/>

          <div className='input-wrapper'>
            <label htmlFor='state'>State</label>
            <input type='text' name='state' placeholder='State' />
          </div>

          <div className='input-wrapper'>
            <label htmlFor='company'>Company</label>
            <input type='text' name='company' placeholder='Company Name' />
          </div>

          <div className='input-wrapper'>
            <label htmlFor='title'>Title</label>
            <input type='text' name='title' placeholder='Title' />
          </div>

          <SelectInput name='home-airport' label='What is your home airport?' opts={homeAirportOptions} required />
          <MultiSelectInput name='frequent-destinations' label='Which Destinations Do You Travel to Frequently?' opts={destinationOptions} required />

          <SelectInput name='travel-type' label='Do you travel for business or pleasure?' opts={['business', 'pleasure']} required />
          <SelectInput name='travel-frequency' label='How often do you travel?' opts={['daily', 'weekly', 'monthly']} required />

          <SelectInput name='travel-prefs' label='Which days do you prefer to travel?' opts={travelPrefsOptions} required />


          <input type="submit" disabled={!this.state.canSubmit} className='submit-button button' value='Submit Your Application'/>
        </Formsy.Form>
      </div>
    );
  }

});

module.exports = JoinUsForm;