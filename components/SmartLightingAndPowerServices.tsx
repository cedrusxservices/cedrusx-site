// Location: components/SmartLightingAndPowerServices.tsx

import React from 'react';
import { Zap, ShieldCheck, ArrowRight, Fan, Lightbulb, Plug, Cpu } from 'lucide-react';

export default function SmartLightingAndPowerServices() {
  const singleServices = [
    {
      title: "Smart Switch / Dimmer",
      price: "$85",
      subtitle: "First device ($45 each add-on)",
      description: "In-wall line-voltage replacement for single-pole or 3-way switches. Full app pairing and voice setup included.",
      icon: Zap,
    },
    {
      title: "Smart Outlet / Receptacle",
      price: "$85",
      subtitle: "First outlet ($45 each add-on)",
      description: "Upgrade standard wall outlets to smart dual-outlets with individual control and energy usage monitoring.",
      icon: Plug,
    },
    {
      title: "Smart Ceiling Fan & Light",
      price: "$150",
      subtitle: "Includes fan assembly + light kit",
      description: "Assembly, ceiling mounting, and smart canopy receiver or wall switch setup for ceiling fan & light combos.",
      icon: Fan,
    },
    {
      title: "Smart Overhead Light",
      price: "$125",
      subtitle: "Flush mounts, chandeliers, pendants",
      description: "1-for-1 replacement of standard ceiling light fixtures with tuneable white or color-changing smart LED lights.",
      icon: Lightbulb,
    },
  ];

  const bundles = [
    {
      title: "Room Upgrade Bundle",
      price: "$269",
      savings: "Save up to $40",
      description: "Ideal for a living room or primary bedroom overhaul.",
      includes: [
        "Up to 4 Smart Switches or Outlets",
        "Wi-Fi & App provisioning",
        "Alexa / Google / HomeKit voice linkage",
        "Custom automation scene setup",
      ],
      popular: true,
    },
    {
      title: "Whole-Home Automation",
      price: "$499",
      savings: "Best Value",
      description: "Comprehensive smart power and lighting control across multiple rooms.",
      includes: [
        "Up to 8 Switches/Outlets OR 2 Fan Combos + 4 Switches",
        "Multi-room hub & ecosystem pairing",
        "Sunset/Sunrise & away-mode automations",
        "Priority scheduling",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white" id="smart-lighting-power">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
          <Zap className="w-4 h-4" />
          <span>Professional Installation & Automation</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Smart Switches, Outlets, Fans & Lighting
        </h2>
        <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
          Upgrade your home's electrical points and ceiling fixtures with clean installation, seamless app configuration, and hands-free voice control.
        </p>
      </div>

      {/* Individual Services Grid */}
      <div className="max-w-6xl mx-auto mb-16">
        <h3 className="text-xs font-bold text-center text-slate-400 mb-8 uppercase tracking-wider">
          Individual Installation Options
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {singleServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/90 border border-slate-700/80 rounded-xl p-6 flex flex-col justify-between hover:border-slate-600 transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-white">{service.title}</h4>
                  <div className="mt-2 flex items-baseline">
                    <span className="text-3xl font-extrabold text-white">{service.price}</span>
                  </div>
                  <p className="text-xs text-blue-400 mt-1 font-medium">{service.subtitle}</p>
                  <p className="text-xs text-slate-300 mt-3 leading-relaxed">{service.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-700/50">
                 <Button
                    render={<a href="#booking" />}
                    nativeButton={false}
                    className="w-full font-semibold"
                    variant="outline"
                  >
                    Book Single Item
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Package Bundles Grid */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-xs font-bold text-center text-slate-400 mb-8 uppercase tracking-wider">
          Money-Saving Service Bundles
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bundles.map((bundle, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 flex flex-col justify-between bg-slate-800 border ${
                bundle.popular
                  ? 'border-blue-500 shadow-xl shadow-blue-500/10'
                  : 'border-slate-700'
              }`}
            >
              {bundle.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </span>
              )}

              <div>
                <h4 className="text-xl font-bold">{bundle.title}</h4>
                <p className="text-xs text-blue-400 font-semibold mt-1">{bundle.savings}</p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold tracking-tight">{bundle.price}</span>
                </div>
                <p className="mt-3 text-xs text-slate-300">{bundle.description}</p>

                <ul className="mt-6 space-y-3 text-xs text-slate-300">
                  {bundle.includes.map((item, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <ShieldCheck className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <Button
                  render={<a href="#booking" />}
                  nativeButton={false}
                  className="w-full font-semibold"
                  variant={bundle.popular ? "default" : "outline"}
                >
                  Book This Package
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compatibility Note */}
      <div className="mt-12 text-center text-xs text-slate-400 max-w-2xl mx-auto flex items-center justify-center space-x-2">
        <Cpu className="w-4 h-4 text-blue-400 flex-shrink-0" />
        <span>
          Compatible with Lutron Caséta, TP-Link Kasa/Tapo, Leviton, GE Cync, Hunter, Honeywell, Aqara, and Matter/Zigbee/Z-Wave protocols.
        </span>
      </div>
    </section>
  );
}
