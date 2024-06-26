--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: continent; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.continent (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.continent OWNER TO postgres;

--
-- Name: continent_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.continent_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.continent_id_seq OWNER TO postgres;

--
-- Name: continent_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.continent_id_seq OWNED BY public.continent.id;


--
-- Name: country; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.country (
    id integer NOT NULL,
    continent_id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.country OWNER TO postgres;

--
-- Name: country_continent_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.country_continent_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.country_continent_id_seq OWNER TO postgres;

--
-- Name: country_continent_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.country_continent_id_seq OWNED BY public.country.continent_id;


--
-- Name: country_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.country_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.country_id_seq OWNER TO postgres;

--
-- Name: country_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.country_id_seq OWNED BY public.country.id;


--
-- Name: spot; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.spot (
    id integer NOT NULL,
    country_id integer NOT NULL,
    name character varying NOT NULL,
    type character varying NOT NULL,
    direction character varying NOT NULL,
    bottom character varying NOT NULL,
    difficulty character varying NOT NULL,
    quality_rating integer NOT NULL,
    lat character varying NOT NULL,
    long character varying NOT NULL
);


ALTER TABLE public.spot OWNER TO postgres;

--
-- Name: spot_country_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.spot_country_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.spot_country_id_seq OWNER TO postgres;

--
-- Name: spot_country_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.spot_country_id_seq OWNED BY public.spot.country_id;


--
-- Name: spot_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.spot_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.spot_id_seq OWNER TO postgres;

--
-- Name: spot_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.spot_id_seq OWNED BY public.spot.id;


--
-- Name: continent id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.continent ALTER COLUMN id SET DEFAULT nextval('public.continent_id_seq'::regclass);


--
-- Name: country id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.country ALTER COLUMN id SET DEFAULT nextval('public.country_id_seq'::regclass);


--
-- Name: country continent_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.country ALTER COLUMN continent_id SET DEFAULT nextval('public.country_continent_id_seq'::regclass);


--
-- Name: spot id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.spot ALTER COLUMN id SET DEFAULT nextval('public.spot_id_seq'::regclass);


--
-- Name: spot country_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.spot ALTER COLUMN country_id SET DEFAULT nextval('public.spot_country_id_seq'::regclass);


--
-- Data for Name: continent; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.continent (id, name) FROM stdin;
1	Africa
2	Asia
3	Europe
4	North America
5	South America
6	Oceania
\.


--
-- Data for Name: country; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.country (id, continent_id, name) FROM stdin;
\.


--
-- Data for Name: spot; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.spot (id, country_id, name, type, direction, bottom, difficulty, quality_rating, lat, long) FROM stdin;
\.


--
-- Name: continent_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.continent_id_seq', 6, true);


--
-- Name: country_continent_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.country_continent_id_seq', 1, false);


--
-- Name: country_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.country_id_seq', 1, false);


--
-- Name: spot_country_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.spot_country_id_seq', 1, false);


--
-- Name: spot_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.spot_id_seq', 1, false);


--
-- Name: continent continent_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.continent
    ADD CONSTRAINT continent_pkey PRIMARY KEY (id);


--
-- Name: country country_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.country
    ADD CONSTRAINT country_pkey PRIMARY KEY (id);


--
-- Name: spot spot_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.spot
    ADD CONSTRAINT spot_pkey PRIMARY KEY (id);


--
-- Name: country FK_continent_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.country
    ADD CONSTRAINT "FK_continent_id" FOREIGN KEY (continent_id) REFERENCES public.continent(id);


--
-- Name: spot FK_country_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.spot
    ADD CONSTRAINT "FK_country_id" FOREIGN KEY (country_id) REFERENCES public.country(id);


--
-- PostgreSQL database dump complete
--

