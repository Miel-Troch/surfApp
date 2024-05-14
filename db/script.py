import json
import psycopg2

with open('data.json') as f:
    data = json.load(f)

db_params = {
    'dbname': 'surf',
    'user': 'postgres',
    'password': 'root',
    'host': 'localhost',
    'port': '5432'
}

def insert_data(data, db_params):
    try:
        conn = psycopg2.connect(**db_params)
        cursor = conn.cursor()
        
        for continent_name, countries in data.items():
            for country in countries:
                continent_id = country['continent']
                country_name = country['name']
                
                cursor.execute(
                    "INSERT INTO public.country (continent_id, name) VALUES (%s, %s) RETURNING id",
                    (continent_id, country_name)
                )
                country_id = cursor.fetchone()[0]
                
                for spot in country['spots']:
                    cursor.execute(
                        """INSERT INTO public.spot (country_id, name, type, direction, bottom, difficulty, 
                        quality_rating, lat, long) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)""",
                        (
                            country_id, spot['name'], spot['type'], spot['direction'], spot['bottom'], 
                            spot['difficulty'], spot['quality_rating'], spot['lat'], spot['long']
                        )
                    )
        
        conn.commit()
        
    except Exception as e:
        print(f"Error: {e}")
        conn.rollback()
        
    finally:
        print('succesfully committed to db')
        cursor.close()
        conn.close()

insert_data(data, db_params)
