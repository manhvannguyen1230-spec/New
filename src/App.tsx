import React from 'react';
import { Accordion, AccordionItem, Button } from './components';
import { ChevronDown } from './components';

const App: React.FC = () => {
  return (
    <div className="p-8 max-w-3xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold mb-8">Component Demo</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="text">Text Button</Button>
          </div>
          <div className="flex gap-4">
            <Button variant="primary" size="sm">Small Button</Button>
            <Button variant="primary" size="md">Medium Button</Button>
            <Button variant="primary" size="lg">Large Button</Button>
          </div>
          <div className="flex gap-4">
            <Button variant="primary" startIcon={<ChevronDown />}>With Start Icon</Button>
            <Button variant="primary" endIcon={<ChevronDown />}>With End Icon</Button>
          </div>
          <Button variant="primary" fullWidth>Full Width Button</Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Accordion</h2>
        <Accordion>
          <AccordionItem title="Section 1">
            <p>This is the content for section 1. It can contain any React components or HTML elements.</p>
          </AccordionItem>
          <AccordionItem title="Section 2" defaultOpen>
            <p>This is the content for section 2. This section is open by default.</p>
          </AccordionItem>
          <AccordionItem title="Section 3">
            <p>This is the content for section 3.</p>
            <Button variant="secondary" size="sm" className="mt-4">
              Action Button
            </Button>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
};
