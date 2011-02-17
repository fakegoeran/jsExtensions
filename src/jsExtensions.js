//Extending the Array prototype
if (typeof Array.prototype.each !== "function") {
	Array.prototype.each = function (block) {
		for (var i = 0; i < this.length; i++) {
			block(this[i]);
		}
	};
}

if (typeof Array.prototype.each_index !== "function") {
	Array.prototype.each_index = function(block) {
		for (var i = 0; i < this.length; i++) {
			block(i, this[i]);
		}	
	};	
}

if (typeof Array.prototype.where !== "function") {
	Array.prototype.where = function(block) {
		var result = [];
		for (var i = 0; i < this.length; i++) {
			if (block(this[i]) === true) {
				result.push(this[i]);
			}
		}
		return result;	
	};
}

if (typeof Array.prototype.include !== "function") {
	Array.prototype.include = function(block) {
		for (var i = 0; i < this.length; i++) {
			if (block(this[i]) === true) {
				return true;
			}			
		}
		return false;
	}
}

if (typeof Array.prototype.first !== "function") {
	Array.prototype.first = function() {
		if (this.length > 0)
			return this[0];
		else
			return null;	
	};
}

if (typeof Array.prototype.take !== "function") {
	Array.prototype.take = function(n) {
		var newList = [];
		var chopLength = n;
		if (n > this.length) {
			chopLength = this.length;
		}
		
		for (var i = 0; i < chopLength; i++) {
			newList.push(this[i]);
		}	
		return newList;
	};
}

if (typeof Array.prototype.any !== "function") {
	Array.prototype.any = function(block) {
		var found = false;
		for (var i = 0; i < this.length; i++) {
			if (block(this[i]) == true) {
				found = true;
				break;
			}
		}
		
		return found;
	};
}

if (typeof Array.prototype.groupBy !== "function") {
	Array.prototype.groupBy = function(block) {
		var result = [];
		
		for (var i = 0; i < this.length; i++) {
			var item = this[i];
			var group = result.where(function(r) { return r.key == block(item) });
			if (group.length == 0) {
				result.push({
					key: block(item),
					values: [item]
				});			
			}
			else {
				group.first().values.push(item);
			}		
		}
		
		return result;	
	};
}

if (typeof Array.prototype.preloadImages !== "function") {
	Array.prototype.preloadImages = function() {
		for (var i = 0; i < this.length; i++) {
			(new Image()).src = this[i];
		}
	};
}

// String
if (typeof String.prototype.take !== "function") {
	String.prototype.take = function (n) {
		return this.substring(0, n);	
	};
}