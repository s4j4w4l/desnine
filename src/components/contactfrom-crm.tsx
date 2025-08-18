"use client";

import React from 'react'

export const ContactFromCRM = () => {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you within 24 hours to discuss your project requirements.
          </p>
        </div>

        {/* Web3Forms iframe without any styling */}
        <iframe 
          src="https://app.hellobonsai.com/f/7d6004c36674ab6?embed=true" 
          frameBorder="0" 
          width="100%" 
          height="1200" 
          style={{
            border: "none", 
            height: "1200px",
            borderRadius: "0",
            backgroundColor: "transparent",
            overflow: "hidden"
          }}
          className="web3forms-iframe"
          scrolling="no"
        />
      </div>

      <style jsx>{`
        .web3forms-iframe {
          /* No additional styling */
        }
        
        /* Disable scrolling within the iframe */
        .web3forms-iframe {
          overflow: hidden !important;
        }
      `}</style>
    </section>
  );
};