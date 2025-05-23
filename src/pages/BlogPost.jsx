import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTheme } from '../ThemeContext';

// This would typically come from an API or database
const blogPosts = {
  1: {
  title: "The End of an Era: Virat Kohli and the Spirit of Test Cricket",
  date: "May 23, 2025",
  readTime: "3 min read",
  image: "/kohli.jpg",
  category: "Cricket",
  tags: ["Kohli", "Test Cricket", "Tribute", "India"],
  author: "Adarsh Naik",
  content: `
## Introduction

The cricketing world stood still when Virat Kohli announced his retirement from Test cricket. A career filled with fierce passion, unparalleled intensity, and unmatched consistency, Kohli redefined the modern-day Test cricketer. For me, a fan and a follower of the game, Kohli's Test journey wasn't just about stats—it was about inspiration, identity, and belief.

## The Kohli Effect on Me

I wasn't always obsessed with Test cricket. Like most in my generation, I gravitated toward the fast thrills of T20. But watching Kohli walk out to bat at number four in whites—with his collar up, eyes locked in, and fire in his belly—was a turning point.

His passion was contagious. His centuries in England and Australia weren't just cricketing feats; they were life lessons. Every time he stared down a fiery spell from a top pacer, it felt like a metaphor: face life's toughest moments with your chin up and heart wide open. Kohli taught me resilience.

He made me believe that aggression isn't always anger—it can be a form of art, a fuel for excellence. His energy on the field made me fall in love with discipline and fitness, two things I once brushed aside.

## Redefining Test Cricket

Kohli didn't just dominate Test cricket; he *revived* it for an entire generation. As captain, he brought back the focus on fast bowlers, insisted on result-oriented pitches, and led India to their first Test series win in Australia. His reign saw India rise to the top of the Test rankings and stay there with pride.

He made fitness non-negotiable in Indian cricket, setting the Yo-Yo test as a benchmark, transforming how cricketers approached preparation.

More than anything, Kohli turned the idea of playing Test cricket into a badge of honor again. The white flannels, the long days, the grind—it was suddenly cool again.

## Favorite Kohli Test Moments

-**119 in Johannesburg (2013):** His first real statement overseas.
-**141 in Adelaide (2014):** A fearless knock that nearly led India to a record chase.
-**149 at Edgbaston (2018):** A masterclass against swing in England.
-**The Melbourne Hundred (2014):** Pure class, pure command.

But perhaps his greatest moment wasn't with the bat—it was his leadership. The grit he showed in the Border-Gavaskar Trophy 2020-21 (even from afar) proved he had instilled a culture of belief and hunger in the team that went beyond his presence.

## A Personal Tribute

As Kohli hangs up his Test boots, it feels deeply personal. It's as if a part of my cricket-watching identity is retiring with him. But the legacy remains.

I owe him more than admiration—I owe him gratitude. For teaching me what it means to stand up under pressure. For making me fall in love with the grind. For making Test cricket feel like life itself—slow, challenging, and ultimately rewarding.

## Conclusion

Virat Kohli's Test career was not just a chapter in cricket history—it was an emotion. He didn't just play Tests; he lived them. His roar after a century, his eyes after a wicket, and his pride in donning the white jersey will echo for years.

Thank you, King Kohli. Test cricket is richer because of you. And so am I.

  `
  },
  2:{
      title: "Demystifying Microservices: A Complete Guide to Modern Distributed Architecture",
      date: "Jan 19, 2025",
      readTime: "12 min read",
      image: "/mico.png",
      category: "Software Architecture",
      tags: ["Microservices", "Architecture", "Distributed Systems", "API Gateway", "Service Mesh", "Event-Driven Architecture"],
      author: "Adarsh Naik",
      content: `
## Introduction

Microservices architecture has fundamentally transformed how we build and deploy modern applications. What started as a response to the limitations of monolithic systems has evolved into the de facto standard for scalable, maintainable software systems. This comprehensive guide explores the depths of microservices architecture, from core principles to advanced implementation patterns, illustrated through real-world examples including my experience building CricStore—a multi-tenant eCommerce platform.

## Understanding Microservices: Beyond the Buzzwords

### What Are Microservices Really?

Microservices represent a distributed system design approach where applications are decomposed into small, independent services that communicate over well-defined APIs. Each service is:

- **Independently deployable**: Can be updated without affecting other services
- **Business-focused**: Organized around business capabilities rather than technical layers
- **Decentralized**: Each service manages its own data and business logic
- **Fault-tolerant**: Failures in one service don't cascade to others
- **Technology-agnostic**: Different services can use different programming languages and databases

### The Evolution from Monolith to Microservices

The journey from monolithic to microservices architecture isn't just a technical shift—it's an organizational transformation. Traditional monoliths suffer from several fundamental issues:

**Deployment Coupling**: A single line of code change requires redeploying the entire application, creating risk and slowing release cycles.

**Technology Lock-in**: The entire application must use the same technology stack, preventing teams from choosing optimal tools for specific problems.

**Scaling Limitations**: You must scale the entire application even if only one component needs additional resources.

**Team Dependencies**: Multiple teams working on the same codebase creates coordination overhead and merge conflicts.

Microservices address these challenges by creating clear boundaries between services, enabling teams to work independently while maintaining system cohesion through well-defined contracts.

## Core Architectural Principles

### Single Responsibility Principle at Scale

Each microservice should have a single reason to change. This principle, borrowed from object-oriented design, scales beautifully to distributed systems. A well-designed microservice handles one business domain completely—from data persistence to business logic to external integrations.

For example, in an eCommerce system like CricStore:
- **Product Service**: Manages product catalog, inventory, and specifications
- **User Service**: Handles authentication, user profiles, and preferences
- **Order Service**: Orchestrates the ordering process and maintains order state
- **Payment Service**: Processes payments and manages transaction records
- **Notification Service**: Sends emails, SMS, and push notifications

### Database per Service Pattern

One of the most critical decisions in microservices is data management. The "database per service" pattern ensures that services remain decoupled at the data layer. Each service owns its data exclusively, and cross-service data access happens only through APIs.

This approach provides several benefits:
- **Data Schema Independence**: Services can evolve their data models without coordination
- **Technology Diversity**: Different services can use databases optimized for their use cases
- **Fault Isolation**: Database issues in one service don't affect others
- **Performance Optimization**: Each database can be tuned for specific access patterns

However, this pattern introduces challenges around data consistency and cross-service queries, which require careful design consideration.

### API-First Design

Microservices communicate exclusively through APIs, making contract design crucial. A well-designed API serves as both an interface and documentation of the service's capabilities. Key principles include:

**Versioning Strategy**: APIs must evolve without breaking existing clients. Common approaches include URL versioning (/v1/products), header versioning, or content negotiation.

**Resource-Oriented Design**: REST APIs should model business entities as resources with standard HTTP methods for manipulation.

**Consistent Error Handling**: Standardized error responses across all services improve client reliability and debugging.

**Comprehensive Documentation**: Tools like OpenAPI/Swagger ensure APIs are self-documenting and testable.

## Advanced Microservices Patterns

### API Gateway Pattern

An API Gateway serves as the single entry point for client requests, providing cross-cutting concerns like authentication, rate limiting, request routing, and response aggregation. This pattern offers several advantages:

**Client Simplification**: Clients interact with a single endpoint instead of multiple service URLs, reducing complexity and network calls.

**Cross-Cutting Concerns**: Authentication, logging, monitoring, and rate limiting are centralized, avoiding duplication across services.

**Protocol Translation**: The gateway can translate between different protocols (HTTP, gRPC, WebSocket) based on client needs.

**Request Composition**: Complex client needs can be fulfilled by aggregating responses from multiple services.

Popular API Gateway solutions include Kong, AWS API Gateway, and Zuul, each offering different trade-offs between features, performance, and complexity.

### Service Discovery and Registry

In dynamic containerized environments, services frequently start, stop, and change locations. Service discovery solves the problem of how services find and communicate with each other.

**Client-Side Discovery**: Services query a registry (like Consul or Eureka) to find available instances of target services. This approach gives clients control over load balancing but increases complexity.

**Server-Side Discovery**: A load balancer queries the registry and routes requests appropriately. This simplifies clients but introduces an additional network hop.

**Service Mesh**: Advanced solutions like Istio or Linkerd provide service discovery as part of a comprehensive communication infrastructure, handling routing, security, and observability transparently.

### Circuit Breaker Pattern

Distributed systems are inherently unreliable—services fail, networks partition, and dependencies become unavailable. The Circuit Breaker pattern prevents cascading failures by monitoring service health and failing fast when dependencies are unreliable.

The pattern operates in three states:
- **Closed**: Normal operation, requests pass through
- **Open**: Dependency is failing, requests fail immediately without attempting the call
- **Half-Open**: Testing if the dependency has recovered

Libraries like Hystrix (Java) and Polly (.NET) provide robust circuit breaker implementations with configurable thresholds, timeouts, and fallback mechanisms.

## Event-Driven Architecture and Messaging

### Beyond Request-Response: Event-Driven Communication

While synchronous API calls work well for request-response scenarios, many business processes are inherently asynchronous. Event-driven architecture enables loose coupling through asynchronous message passing.

**Domain Events**: Services publish events when significant business activities occur (e.g., "Order Placed", "Payment Processed", "Inventory Updated"). Other services subscribe to relevant events and react accordingly.

**Event Sourcing**: Instead of storing current state, systems store the sequence of events that led to that state. This provides complete audit trails and enables powerful temporal queries.

**CQRS (Command Query Responsibility Segregation)**: Separate models for reading and writing data, often used with event sourcing to optimize different access patterns.

### Message Brokers and Streaming Platforms

Reliable event delivery requires robust messaging infrastructure. Different tools serve different use cases:

**Apache Kafka**: High-throughput, fault-tolerant streaming platform ideal for event sourcing and real-time analytics. Kafka's partitioned, replicated logs provide durability and scalability.

**RabbitMQ**: Feature-rich message broker with flexible routing, priority queues, and strong consistency guarantees. Better suited for traditional messaging patterns.

**Amazon SQS/SNS**: Managed messaging services that eliminate operational overhead while providing reliable delivery guarantees.

**Redis Streams**: Lightweight streaming solution built into Redis, suitable for simpler use cases with lower throughput requirements.

In CricStore, I leveraged Kafka's event streaming capabilities to decouple services and enable real-time features. When a user adds items to their cart, the Cart Service publishes events that the Inventory Service consumes to update stock levels, while the Recommendation Service uses the same events to improve product suggestions.

## Data Management in Distributed Systems

### The Challenge of Distributed Data

Microservices create data management challenges that don't exist in monolithic systems. Each service owns its data, but business processes often span multiple services, requiring coordination without direct database access.

### Saga Pattern for Distributed Transactions

Traditional ACID transactions don't work across service boundaries. The Saga pattern manages distributed transactions through a series of local transactions with compensating actions for rollback.

**Choreography-Based Sagas**: Services coordinate through events without a central controller. Each service listens for events, performs its work, and publishes the result.

**Orchestration-Based Sagas**: A central orchestrator manages the transaction flow, calling services in sequence and handling failures.

For example, processing an order in CricStore involves multiple services:
1. Order Service creates the order
2. Payment Service processes payment
3. Inventory Service reserves items
4. Shipping Service creates shipment

If any step fails, compensating transactions reverse the completed steps.

### Data Synchronization Strategies

Services often need read access to data owned by other services. Several patterns address this need:

**API Composition**: Services make API calls to retrieve needed data. Simple but can create performance bottlenecks and coupling.

**Database Views**: Create read-only views across service databases. Provides performance but couples services at the data layer.

**Event-Driven Replication**: Services maintain local copies of needed data, updated through events. Provides performance and decoupling but introduces eventual consistency.

**CQRS with Read Models**: Separate read and write models, with read models optimized for query patterns and updated asynchronously.

## Deployment and DevOps Excellence

### Containerization and Orchestration

Microservices and containers are natural partners. Containers provide consistent deployment environments, while orchestration platforms manage service lifecycle at scale.

**Docker Fundamentals**: Each service runs in its own container with its dependencies, ensuring consistent behavior across environments. Multi-stage builds optimize image size and security.

**Kubernetes Orchestration**: Kubernetes manages container deployment, scaling, service discovery, and health checking. Key concepts include:
- **Pods**: Groups of containers that share networking and storage
- **Services**: Stable network endpoints for accessing pods
- **Deployments**: Declarative updates for pods and services
- **ConfigMaps and Secrets**: External configuration management

**Service Mesh**: Advanced networking layers like Istio provide traffic management, security, and observability without changing application code.

### CI/CD for Microservices

Independent deployability is a key microservices benefit, but it requires sophisticated CI/CD pipelines. Each service needs its own pipeline while maintaining system-wide coordination.

**Build Strategies**: 
- **Monorepo**: All services in one repository with selective building
- **Polyrepo**: Each service in its own repository with independent pipelines
- **Hybrid**: Related services grouped in repositories with shared tooling

**Testing Pyramid**: 
- **Unit Tests**: Fast, isolated tests for individual components
- **Integration Tests**: Verify service interactions with dependencies
- **Contract Tests**: Ensure API compatibility between services
- **End-to-End Tests**: Validate complete user journeys across services

**Deployment Patterns**:
- **Blue-Green**: Switch traffic between old and new versions instantly
- **Canary**: Gradually roll out changes to a subset of users
- **Rolling**: Update instances incrementally without downtime

In CricStore's deployment pipeline, GitHub Actions orchestrates the entire flow: code changes trigger automated tests, Docker images are built and scanned for vulnerabilities, and Kubernetes manifests are updated through GitOps workflows.

## Observability and Monitoring

### The Three Pillars of Observability

Distributed systems are opaque—understanding system behavior requires comprehensive observability through metrics, logs, and traces.

**Metrics**: Quantitative measurements of system behavior over time. Key microservices metrics include:
- **Request Rate**: Requests per second for each service
- **Error Rate**: Percentage of failed requests
- **Response Time**: Latency percentiles (p50, p95, p99)
- **Saturation**: Resource utilization (CPU, memory, disk)

**Distributed Tracing**: Track requests as they flow through multiple services. Tools like Jaeger or Zipkin create visual representations of request paths, helping identify bottlenecks and failures.

**Structured Logging**: Consistent, searchable log formats across all services. Correlation IDs link related log entries across service boundaries.

### Monitoring and Alerting

Effective monitoring balances coverage with noise reduction. Alert on symptoms (user-facing problems) rather than causes (internal metrics).

**SLI/SLO Framework**: 
- **Service Level Indicators (SLIs)**: Metrics that matter to users (availability, latency, error rate)
- **Service Level Objectives (SLOs)**: Target values for SLIs
- **Error Budgets**: Acceptable amount of unreliability based on SLOs

**Alerting Best Practices**:
- Alert on SLO violations, not individual metric thresholds
- Include runbooks with alerts for faster resolution
- Use different alert channels based on severity
- Implement alert fatigue prevention through proper thresholds

## Security in Microservices

### Distributed Security Challenges

Microservices expand the attack surface and complicate security implementation. Traditional perimeter-based security doesn't work when services communicate across network boundaries.

### Zero Trust Architecture

Zero Trust assumes no implicit trust based on network location. Every request must be authenticated and authorized, whether from external clients or internal services.

**Service-to-Service Authentication**: 
- **Mutual TLS (mTLS)**: Services authenticate each other using certificates
- **JWT Tokens**: Services include signed tokens in requests for identity verification
- **OAuth 2.0**: Standardized authorization framework for service access

**API Security**:
- **Rate Limiting**: Prevent abuse and ensure fair resource usage
- **Input Validation**: Sanitize and validate all inputs at service boundaries
- **HTTPS Everywhere**: Encrypt all network communication

**Secrets Management**: 
- **External Secret Stores**: Use services like HashiCorp Vault or AWS Secrets Manager
- **Runtime Secret Injection**: Avoid storing secrets in container images
- **Secret Rotation**: Regularly update credentials and certificates

## Performance Optimization

### Latency and Throughput Considerations

Microservices introduce network latency between service calls. Optimization strategies include:

**Caching Strategies**:
- **Local Caching**: In-memory caches within services for frequently accessed data
- **Distributed Caching**: Shared caches (Redis, Memcached) for cross-service data
- **CDN**: Content delivery networks for static assets and API responses

**Asynchronous Processing**: 
- **Message Queues**: Decouple request processing from response delivery
- **Event Streaming**: Process data in real-time streams rather than batch requests
- **Background Jobs**: Move heavy processing out of request-response cycles

**Connection Pooling**: Reuse database and HTTP connections to reduce overhead

**Circuit Breakers and Timeouts**: Fail fast when dependencies are slow or unavailable

### Database Optimization

Each service's database can be optimized for its specific access patterns:

**Read Replicas**: Scale read-heavy workloads across multiple database instances

**Sharding**: Distribute data across multiple databases based on partition keys

**Polyglot Persistence**: Use different database types optimized for each service's needs:
- **Relational Databases**: ACID transactions for financial data
- **Document Stores**: Flexible schemas for catalog data
- **Time-Series Databases**: Optimized for metrics and analytics
- **Graph Databases**: Relationship-heavy data like social networks

## Testing Strategies

### The Microservices Testing Pyramid

Testing distributed systems requires multiple strategies addressing different integration levels:

**Unit Testing**: Test individual components in isolation with mocked dependencies. Fast and reliable but limited coverage of integration issues.

**Integration Testing**: Test service interactions with real dependencies. More realistic but slower and more complex to set up.

**Contract Testing**: Verify API compatibility between services without requiring all services to run simultaneously. Tools like Pact enable consumer-driven contract testing.

**End-to-End Testing**: Validate complete user scenarios across the entire system. Comprehensive but slow and brittle.

**Chaos Engineering**: Deliberately introduce failures to test system resilience. Tools like Chaos Monkey randomly terminate services to verify fault tolerance.

### Test Environment Management

Microservices complicate test environment setup. Strategies include:

**Service Virtualization**: Mock external dependencies to enable isolated testing

**Test Containers**: Use lightweight containers for integration testing with real databases

**Feature Flags**: Toggle functionality to test different scenarios without deploying multiple versions

## When to Choose Microservices

### The Right Problems for Microservices

Microservices aren't universally better than monoliths. They excel in specific scenarios:

**Large Development Teams**: Multiple teams can work independently without coordination overhead

**Complex Domains**: Business complexity benefits from clear service boundaries

**Scalability Requirements**: Different parts of the system have vastly different scaling needs

**Technology Diversity**: Different problems require different technical solutions

**High Availability Requirements**: System must remain available despite individual component failures

### When to Avoid Microservices

**Small Teams**: Coordination overhead outweighs benefits with fewer than 8-10 developers

**Simple Domains**: Straightforward applications don't benefit from distributed complexity

**Early-Stage Products**: Rapid iteration and pivoting are harder with distributed systems

**Limited DevOps Maturity**: Microservices require sophisticated operational capabilities

**Performance-Critical Applications**: Network latency between services can impact performance

## Real-World Implementation: CricStore Case Study

My experience building CricStore illustrates many microservices concepts in practice. The platform handles cricket equipment sales across multiple tenants with real-time inventory and social features.

### Service Decomposition

I identified seven core services based on business capabilities:

**Product Service**: Manages cricket equipment catalog with complex hierarchies (bats, balls, protective gear) and specifications (weight, materials, certifications)

**User Service**: Handles multi-tenant user management with role-based access control for shop owners, staff, and customers

**Cart Service**: Manages shopping cart state with real-time updates and abandoned cart recovery

**Order Service**: Orchestrates the complete order lifecycle from creation through fulfillment

**Payment Service**: Integrates with multiple payment providers (Stripe, PayPal, local gateways) with retry logic and fraud detection

**Inventory Service**: Tracks stock levels across multiple warehouses with real-time updates and reorder notifications

**Notification Service**: Sends emails, SMS, and push notifications based on user preferences and business events

### Event-Driven Integration

Kafka serves as the event backbone, enabling loose coupling and real-time features:

- Cart updates publish events consumed by inventory service for real-time stock validation
- Order placement triggers events processed by inventory, payment, and notification services
- User behavior events feed recommendation engines and analytics systems

This event-driven approach reduced direct service dependencies by 75% compared to a synchronous API-only design.

### Performance Optimizations

Several optimizations addressed the inherent latency of distributed systems:

**API Gateway with Caching**: Implemented response caching for product catalog data, reducing database load by 60%

**Event Streaming**: Real-time cart updates through WebSockets eliminated polling, cutting client wait times by 60%

**Database Optimization**: Used read replicas for product searches and Redis for session storage, improving response times

**Asynchronous Processing**: Moved email sending and analytics processing to background queues, improving perceived performance

### Operational Excellence

DevOps practices ensured reliable deployment and operation:

**Infrastructure as Code**: Terraform manages AWS resources with version control and automated deployments

**Container Orchestration**: Kubernetes handles service lifecycle, scaling, and health monitoring

**Observability**: Prometheus metrics, Jaeger tracing, and structured logging provide comprehensive system visibility

**Security**: mTLS between services, JWT-based authentication, and AWS IAM roles follow zero-trust principles

## The Future of Microservices

### Emerging Trends

**Serverless Microservices**: Functions-as-a-Service platforms like AWS Lambda enable microservices without container management

**Service Mesh Evolution**: Tools like Istio and Linkerd provide transparent networking, security, and observability

**GraphQL Federation**: Unified API layers across multiple services without traditional API gateway complexity

**Edge Computing**: Microservices deployed closer to users for reduced latency and improved user experience

**AI/ML Integration**: Machine learning models deployed as microservices for recommendation engines, fraud detection, and personalization

### Organizational Evolution

Microservices continue driving organizational changes:

**Platform Teams**: Dedicated teams provide common services (authentication, payments, notifications) to product teams

**Developer Experience**: Improved tooling and abstractions make microservices more accessible to developers

**DevOps Maturity**: Organizations invest in automation and observability to handle microservices complexity

## Conclusion

Microservices architecture represents a fundamental shift in how we design, build, and operate software systems. While the complexity is real, the benefits—scalability, resilience, team autonomy, and technological flexibility—make it worthwhile for the right use cases.

Success with microservices requires more than just breaking apart a monolith. It demands organizational commitment to DevOps practices, observability, security, and operational excellence. Teams must embrace distributed systems thinking and invest in the tools and practices that make microservices successful.

My journey with CricStore reinforced that microservices aren't just a technical architecture—they're a way of thinking about software that prioritizes flexibility, resilience, and independent evolution. While the learning curve is steep, the skills and mindset gained are invaluable for building modern, scalable systems.

The future belongs to distributed systems, and microservices provide the foundation for that future. Whether you're building the next unicorn startup or modernizing enterprise systems, understanding microservices architecture is essential for any serious software engineer.

    `
  }
};

const parseContent = (content) => {
  return content
    .split('\n')
    .map((line, index) => {
      // Headers
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-2xl font-bold mt-10 mb-6 text-white leading-tight">{line.substring(4)}</h3>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-3xl font-bold mt-12 mb-8 text-white leading-tight">{line.substring(3)}</h2>;
      }
      
      // Bold text patterns
      if (line.startsWith('**') && line.endsWith('**')) {
        return <p key={index} className="text-xl font-semibold mt-6 mb-4 text-purple-300">{line.slice(2, -2)}</p>;
      }
      
      // List items
      if (line.startsWith('- **')) {
        const match = line.match(/- \*\*(.*?)\*\*: (.*)/);
        if (match) {
          return (
            <div key={index} className="mb-4 pl-4 border-l-2 border-purple-500">
              <span className="font-semibold text-purple-300">{match[1]}</span>
              <span className="text-gray-300">: {match[2]}</span>
            </div>
          );
        }
      }
      
      // Regular list items
      if (line.startsWith('- ')) {
        return <li key={index} className="text-gray-300 text-lg leading-relaxed mb-2">{line.substring(2)}</li>;
      }
      
      // Empty lines
      if (line.trim() === '') {
        return <div key={index} className="h-4"></div>;
      }
      
      // Regular paragraphs
      if (line.trim()) {
        // Handle inline bold text
        const processedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-purple-300">$1</strong>');
        return (
          <p 
            key={index} 
            className="text-gray-300 text-lg leading-relaxed mb-6"
            dangerouslySetInnerHTML={{ __html: processedLine }}
          />
        );
      }
      
      return null;
    })
    .filter(Boolean);
};

export default function BlogPost() {
  const { darkMode } = useTheme();
  const { id } = useParams();
  const post = blogPosts[id];

  if (!post) {
    return (
      <div className={darkMode ? 'dark' : ''}>
        <Navbar />
        <div className={`min-h-screen pt-24 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-6 py-20 text-center">
            <h1 className="text-4xl font-bold mb-4 text-white">
              Blog Post Not Found
            </h1>
            <p className="text-lg mb-8 text-white">
              The blog post you're looking for doesn't exist.
            </p>
            <Link 
              to="/blog"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300"
            >
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar />
      
      {/* Article Header */}
      <article className={`pt-24 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} min-h-screen`}>
        <div className="container mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm">
              <Link 
                to="/blog" 
                className="hover:underline text-purple-400 transition-colors"
              >
                Blog
              </Link>
              <span className="text-gray-400">→</span>
              <span className="text-gray-300 truncate">
                {post.title}
              </span>
            </div>
          </nav>

          {/* Article Header */}
          <header className="max-w-4xl mx-auto mb-16">
            <div className="mb-6">
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-purple-900/50 text-purple-300 border border-purple-700">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-white">
              {post.title}
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-white text-lg">
                    {post.author}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <time>{post.date}</time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-12">
              {post.tags.map((tag, i) => (
                <span 
                  key={i}
                  className="px-4 py-2 rounded-lg text-sm bg-gray-800 text-gray-300 border border-gray-700 hover:border-purple-500 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl mb-16">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDgwMCA0MDAiIGZpbGw9Im5vbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMzc0MTUxIi8+Cjx0ZXh0IHg9IjQwMCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgZmlsbD0iIzlDQTNBRiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiPk1pY3Jvc2VydmljZXMgQXJjaGl0ZWN0dXJlPC90ZXh0Pgo8L3N2Zz4K';
                }}
              />
            </div>
          </header>

          {/* Article Content */}
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="article-content">
                {parseContent(post.content)}
              </div>
            </div>

            {/* Article Footer */}
            <footer className="mt-20 pt-8 border-t border-gray-700">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                <Link 
                  to="/blog"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                >
                  ← Back to Blog
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}