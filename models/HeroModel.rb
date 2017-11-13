class Hero < ActiveRecord::Base
	## don't always have to do this part
	## but if activer record can't find your table, then this will help
	self.table_name = 'heroes'
end