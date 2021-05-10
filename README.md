# NodeJS Middlewares

This is a repository of various middlewares for use in NodeJS/ ExpressJS applications. Please feel free to copy, modify, and use to meet your needs.

## [Authorization Middleware](authorization.middleware.js)

*Intended Use:* A route level middleware, configured for a specific route

*Purpose:* This middleware allows for individual route requests to be authorized by route, by request to determine if a user is permitted to take the intended action. The middleware uses [JSON Web Tokens](https://jwt.io/) to validate and authorize a request.

More information about how this middleware works is available here: 🎥 [YouTube: NodeJS / Express Authorization Middleware](https://www.youtube.com/watch?v=zYi9PguVFx8)

## [Request Assignment Middleware](request-assignment.middleware.js)

*Intended Use:* A request level middleware, intended for the beginning of a request

*Purpose:* This middleware will generate a [UUID](https://www.npmjs.com/package/uuid) and attach it to the request object for the life of the request. Any later events, i.e. successes/ failures, can reference the request ID for better diagnostics and troubleshooting.

## [Response Time Middleware](response-time.middleware.js)

*Intended Use:* A request level middleware, intended for the beginning of a request

*Purpose:* Using the [HR Timer](https://nodejs.org/api/process.html#process_process_hrtime_time) to measure the length of time a request takes, this middleware is helpful to identify anomalies over time, long running processes, areas of improvement.

