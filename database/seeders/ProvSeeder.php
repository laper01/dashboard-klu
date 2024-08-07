<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class ProvSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $filePath = database_path('csv/__provinces.csv');

        // Check if file exists
        if (!File::exists($filePath)) {
            throw new \Exception("File not found at path: {$filePath}");
        }

        // Read the CSV file
        $file = fopen($filePath, 'r');
        $firstLine = true;

        while (($data = fgetcsv($file, 1000, ',')) !== FALSE) {
            // Skip the first line if it contains column headers
            if ($firstLine) {
                $firstLine = false;
                continue;
            }

            // Insert data into the database
            DB::table('_provinces')->insert([
                'prov_id' => $data[0],
                'prov_name' => $data[1],
                'locationid' => $data[2],
                'status' => $data[3],
                // Add other columns as needed
            ]);
        }

        fclose($file);
    }
}
