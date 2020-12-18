const currencies = [
  { key: 'USD', value: 'USD-$' },
  { key: 'INR', value: 'INR-₹' },
];

export default {
  dailyRatesForm: {
    formTitle: 'Daily Rates',
    fields: [
      { name: 'id', label: 'ID', type: 'Identifier' },
      {
        name: 'from',
        label: 'From',
        type: 'Lookup',
        values: currencies,
        defaultValue: 'USD',
      },
      {
        name: 'to',
        label: 'To',
        type: 'Lookup',
        values: currencies,
        defaultValue: 'INR',
      },
      { name: 'effectiveDate', label: 'Effective Date', type: 'Date' },
      { name: 'conversionRate', label: 'Conversion Rate', type: 'Number'},
      { name: 'comments', label: 'Comments', type: 'String' },
    ],
  },
};
