require 'sinatra'

get '/' do
	File.read('lvlup.html');
end

get '/lvlup.js' do
	File.read('lvlup.js');
end

post '/upload' do
	tmpfile = params[:content][:tempfile]
	#do something awesome here
end
