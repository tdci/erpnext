frappe.query_reports["Purchase VAT"] = {

"filters": [

	{

		"fieldname":"from_date",

		"label": __("From Date"),

		"fieldtype": "Date",

		"width": "80",

		"default": frappe.datetime.month_start()

	},

	{

		"fieldname":"to_date",

		"label": __("To Date"),

		"fieldtype": "Date",

		"width": "80",

		"default": frappe.datetime.month_end()

	}

]

}
