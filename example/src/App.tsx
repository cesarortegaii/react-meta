import { Title, Meta, Robots, Preload, OpenGraph, SocialPreview, Schema, SchemaPresets } from 'react-meta';

function App() {
    return (
        <div style={{ fontFamily: 'system-ui, sans-serif', padding: 40, maxWidth: 800, margin: '0 auto' }}>
            {/* 1. Core Metadata */}
            <Title>React Meta Demo | The Definitive SEO Library</Title>
            <Meta name="description" content="A live demonstation of react-meta's capabilities including Social Preview, Schema, and Robots control." />

            {/* 2. Smart Preloading */}
            <Preload href="https://example.com/hero.jpg" as="image" />

            {/* 3. Dynamic Robots */}
            <Robots index={true} follow={true} />

            {/* 4. Social Cards */}
            <OpenGraph
                title="React Meta Demo"
                type="website"
                description="See the social preview in the bottom right corner."
                image="https://via.placeholder.com/1200x630"
                url="https://react-meta.demo"
            />

            {/* 5. Structured Data (Validated) */}
            <Schema data={SchemaPresets.product({
                name: "React Meta Library",
                description: "The best SEO library for React 19.",
                image: "https://via.placeholder.com/100",
                // Offers included to pass validation
                offers: {
                    "@type": "Offer",
                    "price": "0.00",
                    "priceCurrency": "USD"
                }
            })} />

            {/* UI Content */}
            <header>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>react-meta ⚛️🔍</h1>
                <p style={{ fontSize: '1.25rem', color: '#666' }}>
                    Open your Developer Tools console to see Schema validation warnings (if any).
                    <br />
                    Look at the <strong>bottom right</strong> to see the Social Preview overlay.
                </p>
            </header>

            <hr style={{ margin: '2rem 0', opacity: 0.2 }} />

            <section>
                <h2>Features Active on this Page:</h2>
                <ul>
                    <li><strong>Native Hoisting:</strong> <code>&lt;title&gt;</code> and <code>&lt;meta&gt;</code> are in the head.</li>
                    <li><strong>JSON-LD:</strong> Product schema injected.</li>
                    <li><strong>Robots:</strong> <code>index, follow</code> active.</li>
                    <li><strong>Social Preview:</strong> Debugger overlay active development mode.</li>
                </ul>
            </section>

            {/* 6. The Dev Tool */}
            <SocialPreview />
        </div>
    )
}

export default App
