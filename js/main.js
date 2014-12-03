// This Javascript file communicates with webhose's API and return a JSON formatted array of posts from different data sources

$(document).ready(function(){
	$("#search").on("click", function(){
		alert($("#searchForm").serialize());
		return false;
	});
});