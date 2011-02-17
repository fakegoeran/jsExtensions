describe("string", function() {
	it("should have a take function on prototype", function() {
		expect(String.prototype.take).toBeDefined();
		expect(typeof Array.prototype.take).toEqual("function");
	});

	describe("take", function() {
		it("Should substring correctly", function() {
			expect("mandag".take(3)).toEqual("man");
		});
	});
});

describe("Array", function() {
	var names = ["Gøran", "Astrid", "Alex", "Espen"];
	
	it("should should have each function on prototype", function() {
		expect(Array.prototype.each).toBeDefined();
		expect(typeof Array.prototype.each).toEqual("function");
	});
	
	it("should have have a each_index function on prototype", function() {
		expect(Array.prototype.each_index).toBeDefined();
		expect(typeof Array.prototype.each_index).toEqual("function");
	});
	
	it("should have a where function on prototype", function() {
		expect(Array.prototype.where).toBeDefined();
		expect(typeof Array.prototype.where).toEqual("function");
	});
	
	it("should have a include function on prototype", function() {
		expect(Array.prototype.include).toBeDefined();
		expect(typeof Array.prototype.include).toEqual("function");
	});
	
	it("should have a first function on prototype", function() {
		expect(Array.prototype.first).toBeDefined();
		expect(typeof Array.prototype.first).toEqual("function");
	});

	it("should have a take function on prototype", function() {
		expect(Array.prototype.take).toBeDefined();
		expect(typeof Array.prototype.take).toEqual("function");
	});

	it("should have a any function on prototype", function() {
		expect(Array.prototype.any).toBeDefined();
		expect(typeof Array.prototype.any).toEqual("function");
	});

	it("should have a groupBy function on prototype", function() {
		expect(Array.prototype.groupBy).toBeDefined();
		expect(typeof Array.prototype.groupBy).toEqual("function");
	});

	it("should have a preloadImages function on prototype", function() {
		expect(Array.prototype.preloadImages).toBeDefined();
		expect(typeof Array.prototype.preloadImages).toEqual("function");
	});

	describe("each_index", function() {
		it("should iterate over the array starting from index 0", function() {
			var indexes = [];
			
			names.each_index(function(index, item) {
				indexes.push(index);
			});
			
			expect(indexes[0]).toEqual(0);
			expect(indexes[1]).toEqual(1);
			expect(indexes[2]).toEqual(2);
			expect(indexes[3]).toEqual(3);
		});
	});
	
	describe("include", function() {
		it("should return true if found", function() {
			var result = names.include(function(name){
				return name == "Gøran";
			});
			expect(result).toEqual(true);
		});
		
		it("should return false if not found", function() {
			var result = names.include(function(name) {
				return name == "Haldis";
			});
			
			expect(result).toEqual(false);
		});
	});
	
	describe("take", function() {
		it("should take n number of objects", function() {
			var n = 2;
			var newList = names.take(n);
			
			expect(newList.length).toEqual(n);	
			expect(newList[0]).toEqual(names[0]);
			expect(newList[1]).toEqual(names[1]);
		});
		
		it("should handle lists that are smaller than n", function() {
			var n = 100;
			var newList = names.take(n);
			
			expect(newList.length).toEqual(names.length);
			expect(newList[0]).toEqual(names[0]);
			expect(newList[1]).toEqual(names[1]);
			expect(newList[2]).toEqual(names[2]);
			expect(newList[3]).toEqual(names[3]);
		});
	});
	
	describe("any", function() {
		it("should return true if it find a value", function() {
			var found = names.any(function(item) { return item == "Gøran" });
			expect(found).toEqual(true);
		});
		
		it("should return false if it doesn't find a value", function() {
			var found = names.any(function(item) { return item == "Haldis" });
			expect(found).toEqual(false);
		});
	});
	
	describe("groupBy", function() {
		var persons = [
			{
				name: "Gøran"
			}, 
			{
				name: "Astrid"
			}, 
			{
				name: "Gøran"
			}, 
			{
				name: "Alex"
			}];
		
		it("should group by a given property", function() {
			var result = persons.groupBy(function (item) { return item.name });
			expect(result.length).toEqual(3);	
			expect(result[0].key).toEqual("Gøran");
			expect(result[1].key).toEqual("Astrid");
			expect(result[2].key).toEqual("Alex");
		});	
		
		it("should collect items in group", function() {
			var result = persons.groupBy(function (item) { return item.name });
			expect(result[0].values.length).toEqual(2);
			expect(result[0].values[0].name).toEqual("Gøran");
			expect(result[0].values[1].name).toEqual("Gøran");
			expect(result[1].values.length).toEqual(1);
			expect(result[1].values[0].name).toEqual("Astrid");
			expect(result[2].values.length).toEqual(1);
			expect(result[2].values[0].name).toEqual("Alex");
		});
		
		it("should be possible to group by dates", function() {
			var forecasts = [
				{
					date: new Date("1/1/1981 06:00")
				}, 
				{
					date: new Date("1/1/1981 06:00")
				}, 
				{
					date: new Date("1/1/1981 12:00")
				},
				{
					date: new Date("1/2/1981 00:00")
				}
			];
			forecasts = forecasts.map(function (item) { return { date: item.date.toDateString() }})
			var result = forecasts.groupBy(function (item) { return item.date });
			expect(result.length).toEqual(2);
			expect(result[0].key).toEqual("Thu Jan 01 1981");
			expect(result[1].key).toEqual("Fri Jan 02 1981");
		});
	});
});
