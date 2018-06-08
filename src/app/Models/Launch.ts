interface Launch {
  flight_number: number;
  mission_name: string;
  launch_year: string;
  launch_date_unix: number;
  launch_date_utc: string;
  launch_date_local: string;
  rocket: Rocket;
  telemetry: Telemetry;
  reuse: Reuse;
  launch_site: Launchsite;
  launch_success: boolean;
  links: Links;
  details?: any;
}

interface Links {
  mission_patch: string;
  mission_patch_small: string;
  reddit_campaign: string;
  reddit_launch: string;
  reddit_recovery?: any;
  reddit_media?: any;
  presskit: string;
  article_link?: any;
  wikipedia?: any;
  video_link: string;
}

interface Launchsite {
  site_id: string;
  site_name: string;
  site_name_long: string;
}

interface Reuse {
  core: boolean;
  side_core1: boolean;
  side_core2: boolean;
  fairings: boolean;
  capsule: boolean;
}

interface Telemetry {
  flight_club?: any;
}

interface Rocket {
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
  first_stage: Firststage;
  second_stage: Secondstage;
}

interface Secondstage {
  payloads: Payload[];
}

interface Payload {
  payload_id: string;
  reused: boolean;
  customers: string[];
  payload_type: string;
  payload_mass_kg: number;
  payload_mass_lbs?: any;
  orbit: string;
  orbit_params: Orbitparams;
}

interface Orbitparams {
  reference_system: string;
  regime: string;
  longitude?: any;
  semi_major_axis_km?: any;
  eccentricity?: any;
  periapsis_km?: any;
  apoapsis_km?: any;
  inclination_deg?: any;
  period_min?: any;
  lifespan_years: number;
}

interface Firststage {
  cores: Core[];
}

interface Core {
  core_serial: string;
  flight: number;
  block: number;
  reused: boolean;
  land_success?: any;
  landing_type?: any;
  landing_vehicle?: any;
}