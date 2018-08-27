# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.


require_relative 'config/application'
Rails.application.load_tasks

begin
  require "rake"
  require "rspec/core/rake_task"
  desc "Run all tests"
  RSpec::Core::RakeTask.new(:spec) do |t|
    t.pattern = Dir.glob("spec/**/*_spec.rb")
    t.rspec_opts = "--format documentation"
  end
end
