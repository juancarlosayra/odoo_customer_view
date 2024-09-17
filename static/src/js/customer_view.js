odoo.define('customer_view.CustomerView', function(require) {
    'use strict';

    const { Component, useState } = owl;
    const { useListener } = require('web.core.utils.hooks');
    const Registries = require('point_of_sale.Registries');
    

    class CustomerView extends Component {
        constructor() {
            super(...arguments);
            this.state = useState({
                orderlines: this.env.pos.get_order().get_orderlines(),
                total: this.env.pos.get_order().get_total_with_tax(),
                
            });
            useListener('update-order', this._updateOrder.bind(this));
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
