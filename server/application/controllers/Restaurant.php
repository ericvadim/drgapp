<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Restaurant extends CI_Controller {

	public function index()
	{
		exit('restaurant');
	}

	/*public function getrestaurants()
	{
		$this->load->database();
		$this->load->model('restaurant_model');
		$categoryId = $this->input->get('cate');
		
        $rows = $this->restaurant_model->getRestaurants($categoryId);

        $result = array();
        if (sizeof($rows)) {
        	foreach ($rows as $key => $value) {
        		$value->image = base_url() . 'uploads/restaurants/' . $value->id . '.jpg';
        		$result[$value->id] = $value;
        	}
        }
		echo json_encode($result);
		exit;
	}

	public function saverestaurant()
	{
		$this->load->database();
		$this->load->model('restaurant_model');
		$data = json_decode(file_get_contents('php://input'),true);
        $result = $this->restaurant_model->saveRestaurant($data);
		exit;
	}

	public function deleterestaurant()
	{
		$data = $this->input->get();

		$this->load->database();
		$this->load->model('restaurant_model');
		$result = $this->restaurant_model->deleteRestaurant($data['id']);
		exit;
	}*/
}
