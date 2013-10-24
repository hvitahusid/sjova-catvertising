var dhSearch = {};

dhSearch.submitForm = function() {
	var form = document.getElementById('dhSearchForm');
	var arr = form.elements;
	var q = '';

	if(arr[0].value.length > 0) {
		q += arr[0].value + ':';
	}

	q +=  arr[1].value + '/';
	q +=  arr[2].value + 'R';
	q +=  arr[3].value;

	window.top.location = 'http://www.dekkjahollin.is/is/moya/search/index/index?q='+q;
};
