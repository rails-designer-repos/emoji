if Rails.env.development?
  Rails.application.config.middleware.insert_before(
    ActionDispatch::Static,
    Mata,
    watch: %w[app/views app/assets],
    skip: %w[app/assets/builds]
  )
end
