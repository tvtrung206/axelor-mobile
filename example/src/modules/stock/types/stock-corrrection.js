class StockCorrection {
  static status = {
    Draft: 1,
    Validated: 2,
  };

  static getStatus = (select, I18n = {t: () => {}}) => {
    switch (select) {
      case this.status.Draft:
        return I18n.t('Stock_Status_Draft');
      case this.status.Validated:
        return I18n.t('Stock_Status_Validated');
      default:
        console.warn(
          `Status provided with value ${select} is not supported by stock correction`,
        );
        return null;
    }
  };

  static getStatusColor = (status, Colors) => {
    switch (status) {
      case this.status.Draft:
        return {
          backgroundColor: Colors.secondaryColor_light,
          borderColor: Colors.secondaryColor,
        };
      case this.status.Validated:
        return {
          backgroundColor: Colors.primaryColor_light,
          borderColor: Colors.primaryColor,
        };
      default:
        console.warn(
          `Status provided with value ${status} is not supported by stock correction`,
        );
        return {};
    }
  };
}

export default StockCorrection;