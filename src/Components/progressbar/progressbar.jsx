import React from 'react';
import RangeInput from './range-input';
import {ElementList  } from '../Addcart/Elementslist'
import API from "../Addcart/mockAPI"
// import { Row, Column } from './components/grid';
import * as AppUtilities from './app-utilities';
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      priceRange: undefined,
      products: [],
      value: { min: 2000, max: 5000 },
      fetchProductsRequestStatus: '',
    };

    this.handleFetchProductsSuccess = this.handleFetchProductsSuccess.bind(this);
    this.handleFetchProductsRejected = this.handleFetchProductsRejected.bind(this);

    this.handleRangeInputChange = this.handleRangeInputChange.bind(this);
    this.handleMinInputValueChange = this.handleMinInputValueChange.bind(this);
    this.handleMaxInputValueChange = this.handleMaxInputValueChange.bind(this);
  }

  // Lifecycle events
  // ======================
  componentDidMount() {
    this.fetchAPI();
  }

  handleFetchProductsSuccess(API) {
    this.setState({
      API,
      fetchProductsRequestStatus: 'success',
      priceRange: {
        min: AppUtilities.getMinPrice(API),
        max: AppUtilities.getMaxPrice(API),
      },
      displayMinInputValue: AppUtilities.getMinPrice(API),
      displayMaxInputValue: AppUtilities.getMaxPrice(API),
    });
  }

  handleFetchProductsRejected() {
    this.setState({
      fetchProductsRequestStatus: 'rejected',
    });
  }

  fetchAPI() {
    this.setState({
      fetchProductsRequestStatus: 'pending',
    });

    fetchProducts()
      .then(this.handleFetchProductsSuccess)
      .catch(this.handleFetchProductsRejected);
  }

  // Events===================================

  handleRangeInputChange(values) {
    const { products } = this.state;
    const minPrice = AppUtilities.getMinPrice(products);
    const maxPrice = AppUtilities.getMaxPrice(products);
    const fullRangeValue = maxPrice - minPrice;
    const stepLeftValue = AppUtilities.convertPercentIntoNumber(values.left, fullRangeValue);
    const stepRightValue = AppUtilities.convertPercentIntoNumber(values.right, fullRangeValue);

    this.setState({
      priceRange: {
        min: minPrice + stepLeftValue,
        max: maxPrice - stepRightValue,
      },
      displayMinInputValue: minPrice + stepLeftValue,
      displayMaxInputValue: maxPrice - stepRightValue,
    });
  }

  handleMinInputValueChange(event) {
    const { products, priceRange } = this.state;
    const { value } = event.currentTarget;
    const minPrice = AppUtilities.getMinPrice(products);
    let newState = {};

    if (Number(value) >= minPrice && Number(value) <= Number(priceRange.max)) {
      newState = {
        priceRange: {
          ...priceRange,
          min: Number(value),
        },
        displayMinInputValue: value,
      };
    } else {
      newState = {
        ...priceRange,
        displayMinInputValue: value,
      };
    }

    this.setState(newState);
  }

  handleMaxInputValueChange(event) {
    const { products, priceRange } = this.state;
    const { value } = event.currentTarget;
    const maxPrice = AppUtilities.getMaxPrice(products);
    let newState = {};

    if (Number(value) <= maxPrice && Number(value) >= Number(priceRange.min)) {
      newState = {
        priceRange: {
          ...priceRange,
          max: Number(value),
        },
        displayMaxInputValue: value,
      };
    } else {
      newState = {
        ...priceRange,
        displayMaxInputValue: value,
      };
    }

    this.setState(newState);
  }

  render() {
    const {
      priceRange,
      products,
      fetchProductsRequestStatus,
      displayMinInputValue,
      displayMaxInputValue,
    } = this.state;
    const minPrice = AppUtilities.getMinPrice(products);
    const maxPrice = AppUtilities.getMaxPrice(products);
    const items = AppUtilities.getItems(priceRange, products);

    return (
      <div>
        {fetchProductsRequestStatus === 'pending' && <div className={styles.status}>Getting the best deals for you...</div>}

        {fetchProductsRequestStatus === 'rejected' && <div className={styles.status}>We cannot reach the server, please try again</div>}

        {fetchProductsRequestStatus === 'success' && products.length !== 0 && (
          <>

           

            <Row position="center">
            {/* <InputRange
        maxValue={maxPrice}
        minValue={minPrice}
        value={this.state.value}
        onChange={value => this.setState({ value })} /> */}
              {/* <RangeInput
                minPrice={minPrice}
                maxPrice={maxPrice}
                values={[priceRange.min, priceRange.max]}
                spaces={10}
                sticky
                onChange={this.handleRangeInputChange}
              /> */}
            </Row>

            <Row direction="row" position="center">
              <Column>
                <input
                  type="text"
                  value={displayMinInputValue}
                  className={styles['values-field']}
                  onChange={this.handleMinInputValueChange}
                />
              </Column>
              <Column>
                <input
                  type="text"
                  value={displayMaxInputValue}
                  className={styles['values-field']}
                  onChange={this.handleMaxInputValueChange}
                />
              </Column>
            </Row>

            <Elementlist items={items} />
          </>
        )}
      </div>
    );
  }
}

export default App;
