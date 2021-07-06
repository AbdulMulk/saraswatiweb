<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Custom404 extends MX_Controller {

	function __construct()
	{
		parent::__construct();
	}

	public function header()
	{
		return Modules::run('layout/setheader');
	}

	public function footer()
	{
		return Modules::run('layout/setfooter');
	}
	 
	
	public function index()
	{
		$this->grid();
	}
	
	
	private function grid()
	{
		$contents = $this->grid_content();
	
		$data = array(
				  'base_url' => base_url(),
				  'contents' => $contents,
				  );
		$this->parser->parse('layout/contents.html', $data);
		
	}
	
	private function grid_content()
	{
		
		
		$data = array(
				  'base_url' => base_url()
				  );
		return $this->parser->parse('index.html', $data, TRUE);
	} 

}

?>
