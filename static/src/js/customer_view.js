odoo.define('customer_view.CustomerView', function(require) {
    'use strict';

    const { Component, useState, useExternalListener } = owl;
    const { useListener } = require('web.core.utils.hooks');
    const Registries = require('point_of_sale.Registries');
    const ProductScreen = require('point_of_sale.ProductScreen');

    class CustomerView extends Component {
        constructor() {
            super(...arguments);
            this.state = useState({
                orderlines: this.env.pos.get_order().get_orderlines(),
                total: this.env.pos.get_order().get_total_with_tax(),
                showCustomView: false, // Agrego un estado para condicionar que se muestre la vista
            });
            useListener('update-order', this._updateOrder);
        }

        _updateOrder() {
            this.state.orderlines = this.env.pos.get_order().get_orderlines();
            this.state.total = this.env.pos.get_order().get_total_with_tax();
        }


    }

    CustomerView.template = 'CustomerView';
    Registries.Component.add(CustomerView);

    return CustomerView;
});
