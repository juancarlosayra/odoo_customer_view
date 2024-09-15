{
    'name': 'Customer View',
    'version': '1.0',
    'category': 'Point of Sale',
    'summary': 'Real-time customer view of order',
    'description': 'Allows customers to see their order and total amount in real-time.',
    'depends': ['point_of_sale'],
    'data': [
    ],
    
    'qweb': ['static/src/xml/customer_view.xml'],

    'installable': True,
    'application': False,

    'assets':{
        'point_of_sale.assets':[
            'customer_view/static/src/**/*.js',
            'customer_view/static/src/**/*.xml',
        ]
    }

}
